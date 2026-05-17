// ── Store ─────────────────────────────────────────────────────────────────────
// Trip data is stored in the top-level Firestore 'trips' collection so that
// multiple users can access the same trip document (sharing/collaboration).
//
// createTripListStore  — manages the list of saved trips (landing page)
// createTripStore      — manages the days within a single trip (planner/globe)
//
// Both work in guest mode (localStorage only) and sync to Firestore when a
// Firebase userId is provided.

import {
  collection, doc, setDoc, getDoc, getDocs, deleteDoc, updateDoc,
  onSnapshot, query, where, orderBy, serverTimestamp,
  arrayUnion, arrayRemove, deleteField,
} from 'firebase/firestore';
import { getDb } from './firebase.js';

// ── Role helpers ──────────────────────────────────────────────────────────────

export function getRole(trip, uid) {
  if (!uid || !trip) return null;
  if (trip.ownerId === uid) return 'owner';
  return trip.members?.[uid] || null; // 'editor' | 'viewer' | null
}

export function canEdit(trip, uid) {
  const r = getRole(trip, uid);
  return r === 'owner' || r === 'editor';
}

// ── ID / code generators ──────────────────────────────────────────────────────

const newId   = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const newCode = () => Math.random().toString(36).slice(2, 9).toUpperCase();

// ── Default day shape ─────────────────────────────────────────────────────────

export const defaultDay = () => ({
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

export const rdIndex = () => { try { return JSON.parse(localStorage.getItem(LS_INDEX) || '[]'); } catch { return []; } };
const wrIndex        = v  => { try { localStorage.setItem(LS_INDEX, JSON.stringify(v)); } catch {} };
export const rdTrip  = id => { try { return JSON.parse(localStorage.getItem(tripKey(id)) || 'null'); } catch { return null; } };
const wrTrip         = t  => { try { localStorage.setItem(tripKey(t.id), JSON.stringify(t)); } catch {} };
const rmTrip         = id => { try { localStorage.removeItem(tripKey(id)); } catch {} };

function tsToMs(v) {
  if (!v) return 0;
  if (typeof v?.toMillis === 'function') return v.toMillis();
  return typeof v === 'number' ? v : 0;
}

function normTrip(data) {
  return {
    memberUids: [],
    members:    {},
    ownerName:  '',
    ...data,
    createdAt: tsToMs(data.createdAt),
    updatedAt: tsToMs(data.updatedAt),
  };
}

// ── Trip List Store ───────────────────────────────────────────────────────────
// Uses TWO Firestore subscriptions:
//   q1 — trips owned by this user
//   q2 — trips where this user appears in memberUids[]
// Results are merged client-side and de-duped.

export function createTripListStore(userId, userDisplayName, onChange) {
  let _ownedTrips  = [];
  let _sharedTrips = [];
  let _unsubOwned  = null;
  let _unsubShared = null;

  function _merge() {
    const all = [..._ownedTrips];
    for (const t of _sharedTrips) {
      if (!all.find(o => o.id === t.id)) all.push(t);
    }
    all.forEach(t => wrTrip(t));
    wrIndex(all.map(({ id, name, createdAt }) => ({ id, name, createdAt })));
    onChange([...all]);
  }

  function subscribeFirestore(uid) {
    if (_unsubOwned)  { _unsubOwned();  _unsubOwned  = null; }
    if (_unsubShared) { _unsubShared(); _unsubShared = null; }
    const db = getDb();
    if (!db || !uid) return;

    const q1 = query(collection(db, 'trips'), where('ownerId', '==', uid), orderBy('updatedAt', 'desc'));
    _unsubOwned = onSnapshot(q1, snap => {
      const fromFirestore = snap.docs.map(d => normTrip({ id: d.id, ...d.data() }));
      // Merge: keep any locally-held trips not yet visible in Firestore (e.g.
      // during migration from the old users/{uid}/trips/ path, or while a write
      // is still propagating). Firestore is the source of truth for anything it
      // does know about; local-only entries are preserved until confirmed.
      const localOnly = _ownedTrips.filter(l => !fromFirestore.find(f => f.id === l.id));
      _ownedTrips = [...fromFirestore, ...localOnly];
      _merge();
    }, err => console.warn('Firestore owned trips:', err));

    const q2 = query(collection(db, 'trips'), where('memberUids', 'array-contains', uid));
    _unsubShared = onSnapshot(q2, snap => {
      _sharedTrips = snap.docs.map(d => normTrip({ id: d.id, ...d.data() }));
      _merge();
    }, err => console.warn('Firestore shared trips:', err));
  }

  async function pushFirestore(trip) {
    const db = getDb();
    if (!db || !userId) return;
    try {
      await setDoc(doc(db, 'trips', trip.id), {
        ...trip,
        createdAt: trip.createdAt || serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });
    } catch (e) { console.warn('Firestore write:', e); }
  }

  // Init from localStorage
  const localAll = rdIndex().map(meta => rdTrip(meta.id) || { ...meta, days: [] });
  _ownedTrips = localAll;
  setTimeout(() => onChange([...localAll]), 0);
  if (userId) subscribeFirestore(userId);

  return {
    getAll: () => {
      const all = [..._ownedTrips];
      for (const t of _sharedTrips) {
        if (!all.find(o => o.id === t.id)) all.push(t);
      }
      return all;
    },

    async create(name) {
      const id   = newId();
      const trip = {
        id, name,
        ownerId:    userId || null,
        ownerName:  userDisplayName || '',
        memberUids: [],
        members:    {},
        createdAt:  Date.now(),
        updatedAt:  Date.now(),
        days:       [],
      };
      _ownedTrips.unshift(trip);
      wrTrip(trip);
      _merge();
      onChange([...this.getAll()]);
      await pushFirestore(trip);
      return id;
    },

    async delete(id) {
      _ownedTrips  = _ownedTrips.filter(t => t.id !== id);
      _sharedTrips = _sharedTrips.filter(t => t.id !== id);
      rmTrip(id);
      _merge();
      const db = getDb();
      if (db && userId) {
        try { await deleteDoc(doc(db, 'trips', id)); } catch {}
      }
    },

    async rename(id, name) {
      const trip = this.getAll().find(t => t.id === id);
      if (!trip) return;
      trip.name      = name;
      trip.updatedAt = Date.now();
      wrTrip(trip);
      onChange([...this.getAll()]);
      const db = getDb();
      if (db && userId) {
        try { await updateDoc(doc(db, 'trips', id), { name, updatedAt: serverTimestamp() }); } catch {}
      }
    },

    setUserId(uid, displayName) {
      userId          = uid;
      userDisplayName = displayName || '';
      if (uid) {
        subscribeFirestore(uid);
      } else {
        if (_unsubOwned)  { _unsubOwned();  _unsubOwned  = null; }
        if (_unsubShared) { _unsubShared(); _unsubShared = null; }
        _ownedTrips  = rdIndex().map(meta => rdTrip(meta.id) || { ...meta, days: [] });
        _sharedTrips = [];
        onChange([..._ownedTrips]);
      }
    },

    destroy() {
      if (_unsubOwned)  { _unsubOwned();  _unsubOwned  = null; }
      if (_unsubShared) { _unsubShared(); _unsubShared = null; }
    },
  };
}

// ── Trip Store (days within one trip) ────────────────────────────────────────

// Lightweight fingerprint of the days array. Key-order-independent and covers
// every editable field. Used to detect whether a Firestore snapshot contains
// genuinely new data before deciding to re-render.
function _daysFP(days) {
  return days.map(d =>
    `${d.id}|${d.date}|${d.destination}|${d.event}|${d.accommodation}|` +
    `${d.accomCost}|${d.travelDetails}|${d.travelCost}|${d.travelDay}|${d.finalised}`
  ).join('~');
}

export function createTripStore(tripId, userId, onChange) {
  let _trip = rdTrip(tripId) || {
    id: tripId, name: 'Trip', ownerId: null, ownerName: '',
    memberUids: [], members: {}, createdAt: Date.now(), updatedAt: Date.now(), days: [],
  };
  let _days         = Array.isArray(_trip.days) ? _trip.days : [];
  let _unsub        = null;
  let _timer        = null;
  // True while a local write is queued or in-flight. Suppresses the Firestore
  // echo so an incoming snapshot doesn't clobber the user's in-progress edits.
  let _pendingWrite = false;

  function saveLocal() {
    _trip.days      = _days;
    _trip.updatedAt = Date.now();
    wrTrip(_trip);
  }

  function scheduleFirestore() {
    clearTimeout(_timer);
    _pendingWrite = true;
    _timer = setTimeout(async () => {
      const db = getDb();
      if (!db || !userId) { _pendingWrite = false; return; }
      try {
        await setDoc(doc(db, 'trips', tripId),
          { ..._trip, days: _days, updatedAt: serverTimestamp() },
          { merge: true });
      } catch (e) { console.warn('Firestore write:', e); }
      // Keep suppressing for a moment so the echo snapshot is ignored.
      setTimeout(() => { _pendingWrite = false; }, 3000);
    }, 1500);
  }

  // notifyStructural: called when the list of days changes (add / remove / CSV
  // load). Rebuilds the planner UI so new/removed rows appear immediately.
  function notifyStructural() {
    saveLocal();
    if (userId) scheduleFirestore();
    onChange([..._days]);
  }

  // notifySilent: called when only a field value changes (user is typing).
  // Persists locally and queues a cloud write but does NOT rebuild the DOM,
  // so the user keeps focus and can keep typing without interruption.
  function notifySilent() {
    saveLocal();
    if (userId) scheduleFirestore();
  }

  if (userId) {
    const db = getDb();
    if (db) {
      _unsub = onSnapshot(doc(db, 'trips', tripId), snap => {
        if (!snap.exists()) return;
        // Suppress echoes of our own writes — local state is already correct.
        if (_pendingWrite) return;
        const data = snap.data();
        const incomingDays = Array.isArray(data.days) ? data.days : [];
        // Firebase fires onSnapshot twice on load (cache then server). Skip the
        // second fire if the data hasn't actually changed — this also covers any
        // echo that slips through the _pendingWrite window.
        if (_daysFP(incomingDays) === _daysFP(_days)) return;
        _trip = normTrip({ id: tripId, ...data });
        _days = incomingDays;
        saveLocal();
        onChange([..._days]);
      }, err => console.warn('Firestore trip:', err));
    }
  }

  return {
    tripName: () => _trip.name || 'Trip',
    tripData: () => ({ ..._trip }),

    getAll: () => [..._days],

    add(date, destination) {
      const day = { ...defaultDay(), date, destination };
      _days.push(day);
      _days.sort((a, b) => a.date.localeCompare(b.date));
      notifyStructural();
    },

    update(id, field, value) {
      const d = _days.find(d => d.id === id);
      if (d) { d[field] = value; notifySilent(); }
    },

    remove(id) {
      _days = _days.filter(d => d.id !== id);
      notifyStructural();
    },

    loadFromCSV(rows) {
      _days = rows;
      notifyStructural();
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

// ── Sharing functions ─────────────────────────────────────────────────────────

export async function createInvite(tripId, role, uid) {
  const db = getDb();
  if (!db || !uid) throw new Error('Must be signed in to share');
  const code = newCode();
  await setDoc(doc(db, 'invites', code), {
    tripId,
    role,
    createdBy: uid,
    createdAt: serverTimestamp(),
  });
  return code;
}

export async function joinViaInvite(code, uid) {
  const db = getDb();
  if (!db) throw new Error('Firebase not configured');
  const inviteSnap = await getDoc(doc(db, 'invites', code));
  if (!inviteSnap.exists()) throw new Error('Invite not found or already used');
  const { tripId, role } = inviteSnap.data();
  await updateDoc(doc(db, 'trips', tripId), {
    [`members.${uid}`]: role,
    memberUids: arrayUnion(uid),
  });
  return tripId;
}

export async function updateMemberRole(tripId, targetUid, newRole) {
  const db = getDb();
  if (!db) return;
  await updateDoc(doc(db, 'trips', tripId), {
    [`members.${targetUid}`]: newRole,
  });
}

export async function removeMember(tripId, targetUid) {
  const db = getDb();
  if (!db) return;
  await updateDoc(doc(db, 'trips', tripId), {
    [`members.${targetUid}`]: deleteField(),
    memberUids: arrayRemove(targetUid),
  });
}

// Copy selected days into a different trip (for the viewer "copy days" feature)
export async function copyDaysToTrip(days, targetTripId, uid) {
  const existing = rdTrip(targetTripId) || {
    id: targetTripId, name: 'Trip', ownerId: null, ownerName: '',
    memberUids: [], members: {}, createdAt: Date.now(), updatedAt: Date.now(), days: [],
  };
  const newDays = [
    ...existing.days,
    ...days.map(d => ({ ...d, id: newId() })),
  ].sort((a, b) => a.date.localeCompare(b.date));
  existing.days      = newDays;
  existing.updatedAt = Date.now();
  wrTrip(existing);

  const db = getDb();
  if (db && uid) {
    try {
      await updateDoc(doc(db, 'trips', targetTripId), {
        days: newDays,
        updatedAt: serverTimestamp(),
      });
    } catch (e) { console.warn('copyDaysToTrip Firestore:', e); }
  }
}

// ── Migration: old users/{uid}/trips/ → trips/ ────────────────────────────────

export async function migrateOldTrips(uid, displayName) {
  const migKey = `trippy-migrated-v2-${uid}`;
  if (localStorage.getItem(migKey)) return;
  const db = getDb();
  if (!db) { localStorage.setItem(migKey, '1'); return; }
  try {
    const oldSnap = await getDocs(collection(db, 'users', uid, 'trips'));
    if (oldSnap.empty) { localStorage.setItem(migKey, '1'); return; }
    for (const d of oldSnap.docs) {
      const data = d.data();
      await setDoc(doc(db, 'trips', d.id), {
        ...data,
        id:         d.id,
        ownerId:    uid,
        ownerName:  displayName || '',
        memberUids: data.memberUids || [],
        members:    data.members   || {},
      }, { merge: true });
    }
    localStorage.setItem(migKey, '1');
  } catch (e) { console.warn('Old-path migration failed:', e); }
}

// ── Old local-format migration (v1 single-trip localStorage) ──────────────────

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
  const trip = {
    id, name,
    ownerId:    userId || null,
    ownerName:  '',
    memberUids: [],
    members:    {},
    createdAt:  Date.now(),
    updatedAt:  Date.now(),
    days,
  };
  wrTrip(trip);
  const idx = rdIndex();
  idx.unshift({ id, name, createdAt: trip.createdAt });
  wrIndex(idx);
  localStorage.removeItem('trippy-planner-data');
  const db = getDb();
  if (db && userId) {
    setDoc(doc(db, 'trips', id), {
      ...trip,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }).catch(console.warn);
  }
  return id;
}
