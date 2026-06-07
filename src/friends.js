// ── Trippy Friends Tab ────────────────────────────────────────────────────────
// Left pane: incoming requests + accepted friends + pending sent requests.
// Right pane: selected friend's calendar.

import { getCurrentUser } from './auth.js';
import {
  searchUserByEmail, sendFriendRequest,
  acceptFriendRequest, declineFriendRequest, removeFriendRequest,
  subscribeToMyFriendRequests, getFriendTrips,
} from './store.js';
import { renderCalendar } from './calendar.js';

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

  let _sent     = [];   // requests I sent
  let _received = [];   // pending requests sent to me
  let _selected = null; // friend currently shown in calendar
  let _friendTrips = [];
  let _calYear  = new Date().getFullYear();
  let _calMonth = new Date().getMonth();

  container.innerHTML = `
    <div class="friends-layout">

      <div class="friends-panel">
        <div class="friends-search-row">
          <input class="dark-input friends-email-input" id="fl-email"
            type="email" placeholder="Add friend by email">
          <button class="add-btn" id="fl-add-btn">Add</button>
        </div>
        <div id="fl-status" class="fl-status"></div>
        <div id="fl-panel-body" class="fl-panel-body"></div>
      </div>

      <div class="friends-cal-panel">
        <div class="friends-cal-placeholder" id="fl-placeholder">
          <div class="empty-icon">👥</div>
          <p>Accept a friend request, then select a friend to view their calendar</p>
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

  // ── Calendar helpers ───────────────────────────────────────────────────────

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
    // friend: { uid, displayName, email }
    _selected        = friend;
    _lastSelectedUid = friend?.uid || null;

    if (!friend) { showPlaceholder(); return; }

    container.querySelector('#fl-placeholder').style.display = 'none';
    container.querySelector('#fl-cal-view').style.display    = '';
    container.querySelector('#fl-cal-name').textContent      =
      friend.displayName || friend.email || 'Friend';

    _friendTrips = await getFriendTrips(friend.uid);
    drawCal();
  }

  // ── Left panel rendering ───────────────────────────────────────────────────

  function renderPanel() {
    // Normalise both directions into one friends array
    const seenUids = new Set();
    const friends = [
      ..._sent.filter(r => r.status === 'accepted')
        .map(r => ({ uid: r.to,   displayName: r.toDisplayName,   email: r.toEmail,   reqId: r.id })),
      ..._received.filter(r => r.status === 'accepted')
        .map(r => ({ uid: r.from, displayName: r.fromDisplayName, email: r.fromEmail, reqId: r.id })),
    ].filter(f => { if (seenUids.has(f.uid)) return false; seenUids.add(f.uid); return true; });

    const pendingReceived = _received.filter(r => r.status === 'pending');
    const pendingSent     = _sent.filter(r => r.status === 'pending');
    const panelEl = container.querySelector('#fl-panel-body');

    let html = '';

    // ── Incoming requests ──────────────────────────────────────────────────
    if (pendingReceived.length) {
      html += `<div class="fl-section-label">Requests (${pendingReceived.length})</div>`;
      html += pendingReceived.map(r => `
        <div class="fl-request-item" data-reqid="${r.id}">
          <div class="fl-friend-info">
            <div class="fl-friend-name">${esc(r.fromDisplayName || r.fromEmail)}</div>
            <div class="fl-friend-email">${esc(r.fromEmail)}</div>
          </div>
          <button class="fl-accept-btn add-btn"   data-reqid="${r.id}" data-uid="${r.from}" data-name="${esc(r.fromDisplayName)}" data-email="${esc(r.fromEmail)}">✓</button>
          <button class="fl-decline-btn ghost-btn" data-reqid="${r.id}">✕</button>
        </div>
      `).join('');
    }

    // ── Accepted friends (both directions) ─────────────────────────────────
    html += `<div class="fl-section-label">${friends.length ? `Friends (${friends.length})` : 'Friends'}</div>`;
    if (friends.length) {
      html += friends.map(f => {
        const isSelected = _selected?.uid === f.uid;
        return `
          <div class="fl-friend-item ${isSelected ? 'selected' : ''}"
            data-uid="${f.uid}" data-reqid="${f.reqId}"
            data-name="${esc(f.displayName)}" data-email="${esc(f.email)}">
            <div class="fl-friend-info">
              <div class="fl-friend-name">${esc(f.displayName || f.email)}</div>
              <div class="fl-friend-email">${esc(f.email)}</div>
            </div>
            <button class="fl-remove-btn" data-reqid="${f.reqId}" data-uid="${f.uid}" title="Remove">×</button>
          </div>`;
      }).join('');
    } else {
      html += `<p class="fl-empty">No friends yet — send a request above.</p>`;
    }

    // ── Pending sent ───────────────────────────────────────────────────────
    if (pendingSent.length) {
      html += `<div class="fl-section-label">Pending</div>`;
      html += pendingSent.map(r => `
        <div class="fl-pending-item">
          <div class="fl-friend-info">
            <div class="fl-friend-name">${esc(r.toDisplayName || r.toEmail)}</div>
            <div class="fl-friend-email">Awaiting response…</div>
          </div>
          <button class="fl-remove-btn" data-reqid="${r.id}" title="Cancel request">×</button>
        </div>
      `).join('');
    }

    panelEl.innerHTML = html;

    // ── Events ────────────────────────────────────────────────────────────

    panelEl.querySelectorAll('.fl-accept-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        await acceptFriendRequest(btn.dataset.reqid);
        loadCalendar({ uid: btn.dataset.uid, displayName: btn.dataset.name, email: btn.dataset.email });
      });
    });

    panelEl.querySelectorAll('.fl-decline-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        await declineFriendRequest(btn.dataset.reqid);
      });
    });

    panelEl.querySelectorAll('.fl-friend-item').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.closest('.fl-remove-btn')) return;
        loadCalendar({ uid: el.dataset.uid, displayName: el.dataset.name, email: el.dataset.email });
      });
    });

    panelEl.querySelectorAll('.fl-remove-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        if (_selected?.uid === btn.dataset.uid) { _selected = null; _lastSelectedUid = null; showPlaceholder(); }
        await removeFriendRequest(btn.dataset.reqid);
      });
    });
  }

  // ── Add friend (send request) ──────────────────────────────────────────────

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
      if (!found) {
        setStatus('No account found. Ask your friend to open Trippy Planner first.', true);
      } else if (found.uid === uid) {
        setStatus("You can't add yourself.", true);
      } else if (_sent.some(r => r.to === found.uid)) {
        setStatus('You already have a request with this person.', true);
      } else {
        const me = getCurrentUser();
        await sendFriendRequest(uid, me?.displayName || '', me?.email || '', found);
        emailInput.value = '';
        setStatus(`Request sent to ${found.displayName || found.email}!`, false);
      }
    } catch { setStatus('Something went wrong. Try again.', true); }
    finally  { addBtn.disabled = false; addBtn.textContent = 'Add'; }
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

  // ── Subscribe ──────────────────────────────────────────────────────────────

  const unsub = subscribeToMyFriendRequests(uid, (sent, received) => {
    _sent     = sent;
    _received = received;
    renderPanel();

    // Restore last selected friend after re-render (check both directions)
    if (_lastSelectedUid && !_selected) {
      const fromSent = sent.find(r => r.status === 'accepted' && r.to === _lastSelectedUid);
      if (fromSent) {
        loadCalendar({ uid: fromSent.to, displayName: fromSent.toDisplayName, email: fromSent.toEmail });
      } else {
        const fromRecv = received.find(r => r.status === 'accepted' && r.from === _lastSelectedUid);
        if (fromRecv) loadCalendar({ uid: fromRecv.from, displayName: fromRecv.fromDisplayName, email: fromRecv.fromEmail });
      }
    }
  });

  return unsub;
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
