// ── Trippy Friends Tab ────────────────────────────────────────────────────────
// Split-pane view: friend list on the left, selected friend's calendar on right.

import { subscribeToMyProfile, addFriend, removeFriend, getFriendTrips, searchUserByEmail } from './store.js';
import { renderCalendar } from './calendar.js';

// Persist the selected friend uid across re-renders caused by store updates.
let _lastSelectedUid = null;

const CAL_IDS = { title: '#fl-cal-title', header: '#fl-cal-header', body: '#fl-cal-body' };

export function renderFriendsTab(container, uid) {
  if (!uid) {
    container.innerHTML = `
      <div class="empty-state" style="margin-top:60px">
        <div class="empty-icon">👥</div>
        <p>Sign in to use Trippy Friends.</p>
      </div>`;
    return () => {};
  }

  let _friends     = [];
  let _selected    = null;
  let _friendTrips = [];
  let _calYear     = new Date().getFullYear();
  let _calMonth    = new Date().getMonth();

  container.innerHTML = `
    <div class="friends-layout">

      <div class="friends-panel">
        <div class="friends-search-row">
          <input class="dark-input friends-email-input" id="fl-email"
            type="email" placeholder="Add friend by email">
          <button class="add-btn" id="fl-add-btn">Add</button>
        </div>
        <div id="fl-status" class="fl-status"></div>
        <div id="fl-list"   class="fl-list"></div>
      </div>

      <div class="friends-cal-panel">
        <div class="friends-cal-placeholder" id="fl-placeholder">
          <div class="empty-icon">👥</div>
          <p>Select a friend to view their calendar</p>
        </div>
        <div id="fl-cal-view" style="display:none">
          <div class="friends-cal-header">
            <span class="friends-cal-name" id="fl-cal-name"></span>
            <div class="cal-nav">
              <button class="cal-nav-btn" id="fl-prev">&#8249; Prev</button>
              <span class="cal-title" id="fl-cal-title"></span>
              <button class="cal-nav-btn" id="fl-next">Next &#8250;</button>
            </div>
          </div>
          <div class="cal-grid" id="fl-cal-header"></div>
          <div style="height:6px"></div>
          <div class="cal-grid" id="fl-cal-body"></div>
        </div>
      </div>

    </div>
  `;

  // ── Helpers ────────────────────────────────────────────────────────────────

  function showPlaceholder() {
    container.querySelector('#fl-placeholder').style.display = '';
    container.querySelector('#fl-cal-view').style.display    = 'none';
  }

  function drawCal() {
    const days = _friendTrips
      .flatMap(t => (t.days || []).map(d => ({ ...d, _tripName: t.name })))
      .sort((a, b) => a.date.localeCompare(b.date));
    renderCalendar(container, days, _calYear, _calMonth, CAL_IDS);
  }

  async function loadCalendar(friend) {
    _selected = friend;
    _lastSelectedUid = friend?.uid || null;

    if (!friend) { showPlaceholder(); return; }

    container.querySelector('#fl-placeholder').style.display = 'none';
    container.querySelector('#fl-cal-view').style.display    = '';
    container.querySelector('#fl-cal-name').textContent      = friend.displayName || friend.email;

    _friendTrips = await getFriendTrips(friend.uid);
    drawCal();
  }

  // ── Friend list rendering ──────────────────────────────────────────────────

  function renderList() {
    const listEl = container.querySelector('#fl-list');
    if (!_friends.length) {
      listEl.innerHTML = `<p class="fl-empty">No friends yet — add one above.</p>`;
      return;
    }

    listEl.innerHTML = _friends.map(f => `
      <div class="fl-friend-item ${_selected?.uid === f.uid ? 'selected' : ''}"
           data-fuid="${f.uid}">
        <div class="fl-friend-info">
          <div class="fl-friend-name">${esc(f.displayName || f.email)}</div>
          <div class="fl-friend-email">${esc(f.email)}</div>
        </div>
        <button class="fl-remove-btn" data-fuid="${f.uid}" title="Remove friend">×</button>
      </div>
    `).join('');

    listEl.querySelectorAll('.fl-friend-item').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.fl-remove-btn')) return;
        const friend = _friends.find(f => f.uid === el.dataset.fuid) || null;
        renderList();   // redraw selection highlight first
        loadCalendar(friend);
      });
    });

    listEl.querySelectorAll('.fl-remove-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const fuid = btn.dataset.fuid;
        if (_selected?.uid === fuid) { _selected = null; _lastSelectedUid = null; showPlaceholder(); }
        await removeFriend(uid, fuid);
      });
    });
  }

  // ── Add friend ─────────────────────────────────────────────────────────────

  const emailInput = container.querySelector('#fl-email');
  const addBtn     = container.querySelector('#fl-add-btn');
  const statusEl   = container.querySelector('#fl-status');

  function setStatus(msg, isErr) {
    statusEl.textContent = msg;
    statusEl.className   = `fl-status ${isErr ? 'error' : 'success'}`;
  }

  async function doAdd() {
    const email = emailInput.value.trim();
    if (!email) return;
    addBtn.disabled = true; addBtn.textContent = '…';
    statusEl.textContent = '';
    try {
      const found = await searchUserByEmail(email);
      if (!found)                                setStatus('No user found with that email.', true);
      else if (found.uid === uid)                setStatus("You can't add yourself.", true);
      else if (_friends.some(f => f.uid === found.uid)) setStatus('Already in your list.', true);
      else {
        await addFriend(uid, found);
        emailInput.value = '';
        setStatus(`${found.displayName || found.email} added!`, false);
      }
    } catch { setStatus('Something went wrong.', true); }
    finally   { addBtn.disabled = false; addBtn.textContent = 'Add'; }
  }

  addBtn.addEventListener('click', doAdd);
  emailInput.addEventListener('keydown', e => { if (e.key === 'Enter') doAdd(); });

  // ── Calendar navigation ────────────────────────────────────────────────────

  container.querySelector('#fl-prev').addEventListener('click', () => {
    _calMonth--; if (_calMonth < 0) { _calMonth = 11; _calYear--; }
    if (_selected) drawCal();
  });
  container.querySelector('#fl-next').addEventListener('click', () => {
    _calMonth++; if (_calMonth > 11) { _calMonth = 0; _calYear++; }
    if (_selected) drawCal();
  });

  // ── Profile subscription ───────────────────────────────────────────────────

  const unsub = subscribeToMyProfile(uid, profile => {
    const uids     = profile.friends        || [];
    const profiles = profile.friendProfiles || {};
    _friends = uids.map(fuid => ({
      uid:         fuid,
      displayName: profiles[fuid]?.displayName || '',
      email:       profiles[fuid]?.email        || '',
    }));

    // Restore last selected friend after a re-render
    const restored = _lastSelectedUid ? _friends.find(f => f.uid === _lastSelectedUid) : null;
    if (restored && !_selected) loadCalendar(restored);

    renderList();
  });

  return unsub; // caller must invoke this when leaving the tab
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
