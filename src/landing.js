// ── Landing Page ──────────────────────────────────────────────────────────────
// Shows all trips as cards with filter tabs: All / My Trips / Shared with Me.

import { createTripListStore, checkForMigration, completeMigration } from './store.js';
import { getCurrentUser, renderAuthHeader } from './auth.js';
import { navigate } from './router.js';
import { openShareModal } from './sharing.js';

let _listStore = null;
let _filter    = 'all'; // 'all' | 'mine' | 'shared'

export function renderLanding(root) {
  const user = getCurrentUser();
  const uid  = user?.uid || null;
  const displayName = user?.displayName || user?.email || '';

  if (_listStore) { _listStore.destroy(); _listStore = null; }

  _listStore = createTripListStore(uid, displayName, trips => _render(root, trips, uid));
}

function _render(root, trips, uid) {
  const migData = checkForMigration();

  // Apply filter
  const filtered = _applyFilter(trips, uid);
  const hasSharedTrips = trips.some(t => uid && t.ownerId && t.ownerId !== uid);

  root.innerHTML = `
    <div class="topbar">
      <div class="logo">trippy<span>.</span>planner</div>
      <div class="auth-slot"></div>
    </div>

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

  // ── Migration ───────────────────────────────────────────────────────────────
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

  // ── Filter tabs ─────────────────────────────────────────────────────────────
  root.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      _filter = btn.dataset.filter;
      _render(root, _listStore.getAll(), uid);
    });
  });

  // ── New-trip modal ──────────────────────────────────────────────────────────
  const modal     = root.querySelector('#new-trip-modal');
  const nameInput = root.querySelector('#trip-name-input');

  root.querySelector('#new-trip-btn').addEventListener('click', () => {
    modal.style.display = 'flex';
    nameInput.focus();
  });
  root.querySelector('#modal-cancel').addEventListener('click', () => {
    modal.style.display = 'none';
    nameInput.value = '';
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) { modal.style.display = 'none'; nameInput.value = ''; }
  });

  async function doCreate() {
    const name = nameInput.value.trim();
    if (!name) { nameInput.focus(); return; }
    modal.style.display = 'none';
    nameInput.value = '';
    const id = await _listStore.create(name);
    navigate(`/trip/${id}`);
  }

  root.querySelector('#modal-create').addEventListener('click', doCreate);
  nameInput.addEventListener('keydown', e => {
    if (e.key === 'Enter')  doCreate();
    if (e.key === 'Escape') { modal.style.display = 'none'; nameInput.value = ''; }
  });

  // ── Trip card actions (delegated) ───────────────────────────────────────────
  root.querySelector('#trips-grid')?.addEventListener('click', async e => {
    const card = e.target.closest('[data-trip-id]');
    if (!card) return;
    const id   = card.dataset.tripId;
    const trip = _listStore.getAll().find(t => t.id === id);

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
      if (!isOwner) return; // only owner can rename
      const titleEl = e.target.closest('.trip-card-title');
      const current = titleEl.textContent.trim();
      const inp     = document.createElement('input');
      inp.className = 'dark-input trip-rename-input';
      inp.value     = current;
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

  const isOwner  = !uid || !trip.ownerId || trip.ownerId === uid;
  const role     = trip.ownerId && uid && trip.ownerId !== uid
    ? (trip.members?.[uid] || 'viewer')
    : null;
  const memberCount = (trip.memberUids || []).length;

  return `
    <div class="trip-card ${role ? 'trip-card-shared' : ''}" data-trip-id="${trip.id}">
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

function _applyFilter(trips, uid) {
  if (_filter === 'mine')   return trips.filter(t => !uid || !t.ownerId || t.ownerId === uid);
  if (_filter === 'shared') return trips.filter(t => uid && t.ownerId && t.ownerId !== uid);
  return trips;
}

function _emptyMessage() {
  if (_filter === 'shared') return 'No trips have been shared with you yet.';
  if (_filter === 'mine')   return 'No trips yet — create your first one above.';
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
