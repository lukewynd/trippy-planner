// ── Landing Page ──────────────────────────────────────────────────────────────
// Two tabs: Trips grid (with All / My Trips / Shared with Me filter) and a
// combined Calendar showing every day from all of the user's own trips.

import { createTripListStore, checkForMigration, completeMigration, updateTripVisibility } from './store.js';
import { getCurrentUser, renderAuthHeader } from './auth.js';
import { renderCalendar } from './calendar.js';
import { navigate } from './router.js';
import { openShareModal } from './sharing.js';
import { renderFriendsTab } from './friends.js';

let _listStore      = null;
let _friendsTeardown = null;
let _filter          = 'all';      // trip-grid filter
let _tab             = 'trips';    // 'trips' | 'calendar' | 'friends'
let _calYear         = new Date().getFullYear();
let _calMonth        = new Date().getMonth();

export function renderLanding(root) {
  const user        = getCurrentUser();
  const uid         = user?.uid || null;
  const displayName = user?.displayName || user?.email || '';

  if (_listStore) { _listStore.destroy(); _listStore = null; }

  _listStore = createTripListStore(uid, displayName, trips => {
    const hash = window.location.hash;
    if (hash !== '#/' && hash !== '#' && hash !== '') {
      // Navigated away — stop listening so Firestore writes from other views
      // don't clobber the current page.
      _friendsTeardown?.(); _friendsTeardown = null;
      _listStore?.destroy(); _listStore = null; return;
    }
    _render(root, trips, uid);
  });
}

// ── Main render ───────────────────────────────────────────────────────────────

function _render(root, trips, uid) {
  // Tear down any active friends subscription before rebuilding the DOM.
  _friendsTeardown?.(); _friendsTeardown = null;

  const migData    = checkForMigration();
  const filtered   = _applyFilter(trips, uid);

  root.innerHTML = `
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="auth-slot"></div>
    </div>

    <div class="landing-tabs">
      <button class="landing-tab ${_tab === 'trips'    ? 'active' : ''}" data-ltab="trips">Trips</button>
      <button class="landing-tab ${_tab === 'calendar' ? 'active' : ''}" data-ltab="calendar">Calendar</button>
      <button class="landing-tab ${_tab === 'friends'  ? 'active' : ''}" data-ltab="friends">Trippy Friends</button>
    </div>

    <!-- ── Trips view ──────────────────────────────────────────────────── -->
    <div id="lv-trips" ${_tab !== 'trips' ? 'style="display:none"' : ''}>
      ${migData ? `
        <div class="migration-banner" id="mig-banner">
          <span class="mig-text">You have a saved trip — give it a name to keep it:</span>
          <input class="dark-input mig-input" id="mig-name" value="My Trip" placeholder="Trip name">
          <button class="add-btn mig-save" id="mig-save">Save</button>
          <button class="ghost-btn mig-skip" id="mig-skip">Dismiss</button>
        </div>
      ` : ''}

      <div class="landing-header">
        <h1 class="landing-title">Your Trips</h1>
        <button class="add-btn" id="new-trip-btn">+ New Trip</button>
      </div>

      ${uid ? `
        <div class="filter-tabs">
          <button class="filter-tab ${_filter === 'all'    ? 'active' : ''}" data-filter="all">All Trips</button>
          <button class="filter-tab ${_filter === 'mine'   ? 'active' : ''}" data-filter="mine">My Trips</button>
          <button class="filter-tab ${_filter === 'shared' ? 'active' : ''}" data-filter="shared">Shared with Me</button>
          <button class="filter-tab ${_filter === 'past'   ? 'active' : ''}" data-filter="past">Past Trips</button>
        </div>
      ` : ''}

      ${filtered.length === 0 ? `
        <div class="empty-state">
          <div class="empty-icon">✈</div>
          <p>${_emptyMessage()}</p>
        </div>
      ` : `
        <div class="landing-grid" id="trips-grid">
          ${filtered.map(t => _card(t, uid)).join('')}
        </div>
      `}
    </div>

    <!-- ── Calendar view ───────────────────────────────────────────────── -->
    <div id="lv-calendar" ${_tab !== 'calendar' ? 'style="display:none"' : ''}>
      <div class="landing-cal-header">
        <h2 class="landing-cal-title">All My Trips</h2>
        <div class="cal-nav">
          <button class="cal-nav-btn" id="cal-prev">&#8249; Prev</button>
          <span class="cal-title" id="cal-title"></span>
          <button class="cal-nav-btn" id="cal-next">Next &#8250;</button>
        </div>
      </div>
      <div class="cal-grid" id="cal-days-header"></div>
      <div style="height:6px"></div>
      <div class="cal-grid" id="cal-body"></div>
      ${trips.length === 0 ? `
        <div class="empty-state" style="margin-top:32px">
          <div class="empty-icon">📅</div>
          <p>Add days to your trips and they'll appear here.</p>
        </div>
      ` : ''}
    </div>

    <!-- ── Friends view ─────────────────────────────────────────────────── -->
    <div id="lv-friends" ${_tab !== 'friends' ? 'style="display:none"' : ''}></div>

    <!-- ── New-trip modal ──────────────────────────────────────────────── -->
    <div class="modal-overlay" id="new-trip-modal" style="display:none">
      <div class="modal-box">
        <div class="modal-title">Name your trip</div>
        <input class="dark-input" id="trip-name-input" placeholder="e.g. Japan 2025">
        <div class="modal-actions">
          <button class="add-btn"   id="modal-create">Create</button>
          <button class="ghost-btn" id="modal-cancel">Cancel</button>
        </div>
      </div>
    </div>
  `;

  renderAuthHeader(root);

  // ── Landing tab switching ─────────────────────────────────────────────────
  root.querySelectorAll('[data-ltab]').forEach(btn => {
    btn.addEventListener('click', () => {
      _tab = btn.dataset.ltab;
      root.querySelector('#lv-trips').style.display    = _tab === 'trips'    ? '' : 'none';
      root.querySelector('#lv-calendar').style.display = _tab === 'calendar' ? '' : 'none';
      root.querySelector('#lv-friends').style.display  = _tab === 'friends'  ? '' : 'none';
      root.querySelectorAll('.landing-tab').forEach(b =>
        b.classList.toggle('active', b.dataset.ltab === _tab));
      if (_tab === 'calendar') _renderCal(root, trips, uid);
      if (_tab === 'friends')  _initFriends(root, uid);
    });
  });

  // ── Render active tab immediately ──────────────────────────────────────────
  if (_tab === 'calendar') _renderCal(root, trips, uid);
  if (_tab === 'friends')  _initFriends(root, uid);

  // ── Calendar prev / next ──────────────────────────────────────────────────
  root.querySelector('#cal-prev')?.addEventListener('click', () => {
    _calMonth--; if (_calMonth < 0) { _calMonth = 11; _calYear--; }
    _renderCal(root, trips, uid);
  });
  root.querySelector('#cal-next')?.addEventListener('click', () => {
    _calMonth++; if (_calMonth > 11) { _calMonth = 0; _calYear++; }
    _renderCal(root, trips, uid);
  });

  // ── Migration ─────────────────────────────────────────────────────────────
  if (migData) {
    root.querySelector('#mig-save').addEventListener('click', () => {
      const name = root.querySelector('#mig-name').value.trim() || 'My Trip';
      completeMigration(name, migData, uid);
      renderLanding(root);
    });
    root.querySelector('#mig-skip').addEventListener('click', () => {
      localStorage.removeItem('trippy-planner-data');
      root.querySelector('#mig-banner').remove();
    });
  }

  // ── Filter tabs ───────────────────────────────────────────────────────────
  root.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      _filter = btn.dataset.filter;
      _render(root, _listStore.getAll(), uid);
    });
  });

  // ── New-trip modal ────────────────────────────────────────────────────────
  const modal     = root.querySelector('#new-trip-modal');
  const nameInput = root.querySelector('#trip-name-input');

  root.querySelector('#new-trip-btn')?.addEventListener('click', () => {
    modal.style.display = 'flex';
    nameInput.focus();
  });
  root.querySelector('#modal-cancel').addEventListener('click', () => {
    modal.style.display = 'none'; nameInput.value = '';
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) { modal.style.display = 'none'; nameInput.value = ''; }
  });

  async function doCreate() {
    const name = nameInput.value.trim();
    if (!name) { nameInput.focus(); return; }
    modal.style.display = 'none'; nameInput.value = '';
    const id = await _listStore.create(name);
    navigate(`/trip/${id}`);
  }
  root.querySelector('#modal-create').addEventListener('click', doCreate);
  nameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter')  doCreate();
    if (e.key === 'Escape') { modal.style.display = 'none'; nameInput.value = ''; }
  });

  // ── Trip card actions (delegated) ─────────────────────────────────────────
  root.querySelector('#trips-grid')?.addEventListener('click', async e => {
    const card = e.target.closest('[data-trip-id]');
    if (!card) return;
    const id   = card.dataset.tripId;
    const trip = _listStore.getAll().find(t => t.id === id);

    if (e.target.closest('.vis-btn')) {
      const btn   = e.target.closest('.vis-btn');
      const isOn  = btn.classList.contains('vis-on');
      const isOwner = !uid || !trip?.ownerId || trip.ownerId === uid;
      if (!isOwner) return;
      btn.classList.toggle('vis-on',  !isOn);
      btn.classList.toggle('vis-off',  isOn);
      btn.title = !isOn ? 'Visible to friends — click to hide' : 'Hidden from friends — click to show';
      updateTripVisibility(id, !isOn);
      return;
    }

    if (e.target.closest('.trip-open-btn')) {
      navigate(`/trip/${id}`);
    } else if (e.target.closest('.trip-globe-btn')) {
      navigate(`/globe/${id}`);
    } else if (e.target.closest('.trip-share-btn')) {
      if (!uid) { alert('Sign in to share trips.'); return; }
      openShareModal(id, trip, uid);
    } else if (e.target.closest('.trip-delete-btn')) {
      if (confirm('Delete this trip? This cannot be undone.')) {
        await _listStore.delete(id);
      }
    } else if (e.target.closest('.trip-card-title')) {
      const isOwner = !uid || !trip?.ownerId || trip.ownerId === uid;
      if (!isOwner) return;
      const titleEl = e.target.closest('.trip-card-title');
      const current = titleEl.textContent.trim();
      const inp = document.createElement('input');
      inp.className = 'dark-input trip-rename-input';
      inp.value = current;
      titleEl.replaceWith(inp);
      inp.focus(); inp.select();
      const commit = async () => {
        const newName = inp.value.trim() || current;
        await _listStore.rename(id, newName);
      };
      inp.addEventListener('blur',    commit);
      inp.addEventListener('keydown', ke => { if (ke.key === 'Enter') inp.blur(); });
    }
  });
}

// ── Friends tab init ──────────────────────────────────────────────────────────

function _initFriends(root, uid) {
  _friendsTeardown?.(); _friendsTeardown = null;
  const container = root.querySelector('#lv-friends');
  if (container) _friendsTeardown = renderFriendsTab(container, uid);
}

// ── Calendar rendering ────────────────────────────────────────────────────────

function _renderCal(root, trips, uid) {
  // Aggregate days from all owned trips only
  const ownTrips = uid
    ? trips.filter(t => !t.ownerId || t.ownerId === uid)
    : trips;

  // Flatten to a single days array — if two trips share a date, the one
  // belonging to the earlier-created trip takes precedence.
  const seen = new Set();
  const allDays = ownTrips
    .flatMap(t => (t.days || []).map(d => ({ ...d, _tripName: t.name })))
    .filter(d => {
      if (!d.date || seen.has(d.date)) return false;
      seen.add(d.date);
      return true;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  renderCalendar(root, allDays, _calYear, _calMonth);
}

// ── Card template ─────────────────────────────────────────────────────────────

function _card(trip, uid) {
  const days    = trip.days || [];
  const { total, finalised, cost } = _metrics(days);
  const pct     = total ? Math.round(finalised / total * 100) : 0;
  const range   = days.length
    ? `${_fmt(days[0].date)} – ${_fmt(days[days.length - 1].date)}`
    : 'No days yet';
  const dests   = [...new Set(days.map(d => d.destination).filter(Boolean))];
  const shown   = dests.slice(0, 3);

  const isOwner     = !uid || !trip.ownerId || trip.ownerId === uid;
  const role        = trip.ownerId && uid && trip.ownerId !== uid
    ? (trip.members?.[uid] || 'viewer') : null;
  const memberCount = (trip.memberUids || []).length;

  const isVisible = trip.sharedWithFriends !== false;
  const isPast    = _isPast(trip);
  return `
    <div class="trip-card ${role ? 'trip-card-shared' : ''} ${isPast ? 'trip-card-past' : ''}" data-trip-id="${trip.id}">
      ${isOwner && uid ? `
        <button class="vis-btn ${isVisible ? 'vis-on' : 'vis-off'}"
          title="${isVisible ? 'Visible to friends — click to hide' : 'Hidden from friends — click to show'}">👁</button>
      ` : ''}
      <div class="trip-card-top">
        <div class="trip-card-title-row">
          <div class="trip-card-title">${esc(trip.name)}</div>
          ${role ? `<span class="role-badge role-${role}">${role}</span>` : ''}
          ${isOwner && memberCount > 0 ? `<span class="collab-count" title="${memberCount} collaborator${memberCount !== 1 ? 's' : ''}">👥 ${memberCount}</span>` : ''}
        </div>
        <div class="trip-card-meta">
          ${role ? `<span class="trip-card-owner">by ${esc(trip.ownerName || 'Unknown')}</span>` : ''}
          <span class="trip-card-range">${range}</span>
        </div>
      </div>
      ${shown.length ? `
        <div class="trip-card-dests">
          ${shown.map(d => `<span class="dest-tag">${esc(d)}</span>`).join('')}
          ${dests.length > 3 ? `<span class="dest-tag dest-more">+${dests.length - 3} more</span>` : ''}
        </div>
      ` : `<div class="trip-card-no-days">No days added yet</div>`}
      <div class="trip-card-stats">
        <span>${total} day${total !== 1 ? 's' : ''}</span>
        <span>$${cost.toLocaleString('en-AU', { maximumFractionDigits: 0 })} AUD</span>
        <span>${pct}% finalised</span>
      </div>
      <div class="trip-card-progress">
        <div class="trip-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="trip-card-actions">
        <button class="add-btn trip-open-btn">Open</button>
        <button class="ghost-btn trip-globe-btn">Globe</button>
        ${isOwner ? `<button class="ghost-btn trip-share-btn">Share</button>` : ''}
        ${isOwner ? `<button class="ghost-btn trip-delete-btn">Delete</button>` : ''}
      </div>
    </div>
  `;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

// A trip is "past" when it has at least one day and the latest day date
// is strictly before today (YYYY-MM-DD lexicographic comparison is correct).
function _isPast(trip) {
  const dates = (trip.days || []).map(d => d.date).filter(Boolean).sort();
  if (!dates.length) return false;
  const today = new Date().toISOString().slice(0, 10);
  return dates[dates.length - 1] < today;
}

function _firstDate(trip) {
  const dates = (trip.days || []).map(d => d.date).filter(Boolean).sort();
  return dates[0] || '9999-99-99'; // undated trips sort to end
}

function _applyFilter(trips, uid) {
  const sort = arr => [...arr].sort((a, b) => _firstDate(a).localeCompare(_firstDate(b)));
  if (_filter === 'past') return sort(trips.filter(t => _isPast(t)));
  const active = trips.filter(t => !_isPast(t));
  if (_filter === 'mine')   return sort(active.filter(t => !uid || !t.ownerId || t.ownerId === uid));
  if (_filter === 'shared') return sort(active.filter(t => uid && t.ownerId && t.ownerId !== uid));
  return sort(active);
}

function _emptyMessage() {
  if (_filter === 'past')   return 'No past trips yet.';
  if (_filter === 'shared') return 'No trips have been shared with you yet.';
  return 'No trips yet — create your first one above.';
}

function _metrics(days) {
  return {
    total:    days.length,
    finalised: days.filter(d => d.finalised).length,
    cost:     days.reduce((s, d) => s + Number(d.accomCost || 0) + Number(d.travelCost || 0), 0),
  };
}

function _fmt(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
