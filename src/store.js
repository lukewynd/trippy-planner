// ── Store ─────────────────────────────────────────────────────────────────────
// Two stores:
//   createTripListStore  — manages the list of saved trips (landing page)
//   createTripStore      — manages the days within a single trip (planner/globe)
//
// Both work in guest mode (localStorage only) and sync to Firestore when a
// Firebase userId is provided.

import {
  collection, doc, setDoc, deleteDoc,
  onSnapshot, query, orderBy, serverTimestamp,
} from 'firebase/firestore';
import { getDb } from './firebase.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

const defaultDay = () => ({
  id:            newId(),
  date:          '',
  destination:   '',
  event:         '',
  travelDay:     false,
  accommodation: '',
  accomCost:     0,
  travelDetails: '',
  travelCost:    0,
  finalised:     false,
});

// ── localStorage helpers ──────────────────────────────────────────────────────

const LS_INDEX = 'trippy-planner-trips';
const tripKey  = id => `trippy-trip-${id}`;

const rdIndex = () => { try { return JSON.parse(localStorage.getItem(LS_INDEX) || '[]'); } catch { return []; } };
const wrIndex = v  => { try { localStorage.setItem(LS_INDEX, JSON.stringify(v)); } catch {} };
const rdTrip  = id => { try { return JSON.parse(localStorage.getItem(tripKey(id)) || 'null'); } catch { return null; } };
const wrTrip  = t  => { try { localStorage.setItem(tripKey(t.id), JSON.stringify(t)); } catch {} };
const rmTrip  = id => { try { localStorage.removeItem(tripKey(id)); } catch {} };

function tsToMs(v) {
  if (!v) return 0;
  if (typeof v?.toMillis === 'function') return v.toMillis();
  return typeof v === 'number' ? v : 0;
}

// ── Trip List Store ───────────────────────────────────────────────────────────

export function createTripListStore(userId, onChange) {
  let _trips = [];
  let _unsub  = null;

  function loadLocal() {
    return rdIndex().map(meta => rdTrip(meta.id) || { ...meta, days: [] });
  }

  function writeIndex() {
    wrIndex(_trips.map(({ id, name, createdAt }) => ({ id, name, createdAt })));
  }

  function subscribeFirestore(uid) {
    if (_unsub) { _unsub(); _unsub = null; }
    const db = getDb();
    if (!db || !uid) return;
    const q = query(collection(db, 'users', uid, 'trips'), orderBy('createdAt', 'desc'));
    _unsub = onSnapshot(q, snap => {
      _trips = snap.docs.map(d => {
        const data = d.data();
        return { ...data, createdAt: tsToMs(data.createdAt), updatedAt: tsToMs(data.updatedAt) };
      });
      _trips.forEach(t => wrTrip(t));
      writeIndex();
      onChange([..._trips]);
    }, err => console.warn('Firestore trip list:', err));
  }

  async function pushFirestore(trip) {
    const db = getDb();
    if (!db || !userId) return;
    try {
      await setDoc(doc(db, 'users', userId, 'trips', trip.id),
        { ...trip, createdAt: trip.createdAt || serverTimestamp(), updatedAt: serverTimestamp() },
        { merge: true });
    } catch (e) { console.warn('Firestore write:', e); }
  }

  // Init
  _trips = loadLocal();
  setTimeout(() => onChange([..._trips]), 0);
  if (userId) subscribeFirestore(userId);

  return {
    getAll: () => [..._trips],

    async create(name) {
      const id   = newId();
      const trip = { id, name, createdAt: Date.now(), updatedAt: Date.now(), days: [] };
      _trips.unshift(trip);
      wrTrip(trip);
      writeIndex();
      onChange([..._trips]);
      await pushFirestore(trip);
      return id;
    },

    async delete(id) {
      _trips = _trips.filter(t => t.id !== id);
      rmTrip(id);
      writeIndex();
      onChange([..._trips]);
      const db = getDb();
      if (db && userId) {
        try { await deleteDoc(doc(db, 'users', userId, 'trips', id)); } catch {}
      }
    },

    async rename(id, name) {
      const trip = _trips.find(t => t.id === id);
      if (!trip) return;
      trip.name = name;
      trip.updatedAt = Date.now();
      wrTrip(trip);
      writeIndex();
      onChange([..._trips]);
      await pushFirestore(trip);
    },

    setUserId(uid) {
      userId = uid;
      if (uid) {
        subscribeFirestore(uid);
      } else {
        if (_unsub) { _unsub(); _unsub = null; }
        _trips = loadLocal();
        onChange([..._trips]);
      }
    },

    destroy() { if (_unsub) { _unsub(); _unsub = null; } },
  };
}

// ── Trip Store (days within one trip) ────────────────────────────────────────

export function createTripStore(tripId, userId, onChange) {
  let _trip = rdTrip(tripId) || { id: tripId, name: 'Trip', createdAt: Date.now(), updatedAt: Date.now(), days: [] };
  let _days = Array.isArray(_trip.days) ? _trip.days : [];
  let _unsub = null;
  let _timer = null;

  function saveLocal() {
    _trip.days      = _days;
    _trip.updatedAt = Date.now();
    wrTrip(_trip);
  }

  function scheduleFirestore() {
    clearTimeout(_timer);
    _timer = setTimeout(async () => {
      const db = getDb();
      if (!db || !userId) return;
      try {
        await setDoc(doc(db, 'users', userId, 'trips', tripId),
          { ..._trip, days: _days, updatedAt: serverTimestamp() },
          { merge: true });
      } catch (e) { console.warn('Firestore write:', e); }
    }, 1500);
  }

  function notify() {
    saveLocal();
    if (userId) scheduleFirestore();
    onChange([..._days]);
  }

  if (userId) {
    const db = getDb();
    if (db) {
      _unsub = onSnapshot(doc(db, 'users', userId, 'trips', tripId), snap => {
        if (!snap.exists()) return;
        const data = snap.data();
        _trip = { ...data, createdAt: tsToMs(data.createdAt), updatedAt: tsToMs(data.updatedAt) };
        _days = Array.isArray(_trip.days) ? _trip.days : [];
        saveLocal();
        onChange([..._days]);
      }, err => console.warn('Firestore trip:', err));
    }
  }

  return {
    tripName: () => _trip.name || 'Trip',

    getAll: () => [..._days],

    add(date, destination) {
      const day = { ...defaultDay(), date, destination };
      _days.push(day);
      _days.sort((a, b) => a.date.localeCompare(b.date));
      notify();
    },

    update(id, field, value) {
      const d = _days.find(d => d.id === id);
      if (d) { d[field] = value; notify(); }
    },

    remove(id) {
      _days = _days.filter(d => d.id !== id);
      notify();
    },

    loadFromCSV(rows) {
      _days = rows;
      notify();
    },

    toCSV() {
      const header = ['Date','Destination','Event','Travel Day',
        'Accommodation','Accom Cost','Travel Details','Travel Cost','Finalised'];
      const rows = _days.map(t => [
        t.date, t.destination, t.event,
        t.travelDay ? 'Y' : 'N',
        t.accommodation, t.accomCost, t.travelDetails, t.travelCost,
        t.finalised ? 'Y' : 'N',
      ].map(v => `"${(v ?? '').toString().replace(/"/g, '""')}"`).join(','));
      return [header.join(','), ...rows].join('\n');
    },

    metrics() {
      const total      = _days.length;
      const travelDays = _days.filter(d => d.travelDay).length;
      const finalised  = _days.filter(d => d.finalised).length;
      const cost       = _days.reduce((s, d) => s + Number(d.accomCost || 0) + Number(d.travelCost || 0), 0);
      return { total, travelDays, finalised, cost };
    },

    destroy() {
      clearTimeout(_timer);
      if (_unsub) { _unsub(); _unsub = null; }
    },
  };
}

// ── Old-format migration ──────────────────────────────────────────────────────

export function checkForMigration() {
  try {
    const raw  = localStorage.getItem('trippy-planner-data');
    if (!raw) return null;
    const days = JSON.parse(raw);
    if (!Array.isArray(days) || days.length === 0) {
      localStorage.removeItem('trippy-planner-data');
      return null;
    }
    return days;
  } catch { return null; }
}

export function completeMigration(name, days, userId) {
  const id   = newId();
  const trip = { id, name, createdAt: Date.now(), updatedAt: Date.now(), days };
  wrTrip(trip);
  const idx = rdIndex();
  idx.unshift({ id, name, createdAt: trip.createdAt });
  wrIndex(idx);
  localStorage.removeItem('trippy-planner-data');

  const db = getDb();
  if (db && userId) {
    setDoc(doc(db, 'users', userId, 'trips', id),
      { ...trip, createdAt: serverTimestamp(), updatedAt: serverTimestamp() })
      .catch(console.warn);
  }
  return id;
}
