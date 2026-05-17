// ── Sharing Modal ──────────────────────────────────────────────────────────────
// Rendered as a body-level overlay so it works regardless of current route.
// For owners: shows invite-link generation and member management.
// For non-owners: shows the user's role and trip owner info.

import { createInvite, updateMemberRole, removeMember } from './store.js';

export function openShareModal(tripId, tripData, uid) {
  document.getElementById('share-modal-overlay')?.remove();

  const members    = tripData.members    || {};
  const memberUids = tripData.memberUids || [];
  const isOwner    = tripData.ownerId === uid;
  const myRole     = members[uid] || null;

  const memberRows = Object.entries(members).map(([mUid, role]) => `
    <div class="share-member-row" data-uid="${mUid}">
      <span class="share-member-id">${mUid.slice(0, 12)}…</span>
      ${isOwner ? `
        <select class="dark-input share-role-select" data-uid="${mUid}">
          <option value="editor" ${role === 'editor' ? 'selected' : ''}>Editor</option>
          <option value="viewer" ${role === 'viewer' ? 'selected' : ''}>Viewer</option>
        </select>
        <button class="ghost-btn share-remove-btn" data-uid="${mUid}">Remove</button>
      ` : `<span class="role-badge role-${role}">${role}</span>`}
    </div>
  `).join('');

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id        = 'share-modal-overlay';
  overlay.style.display = 'flex';

  overlay.innerHTML = `
    <div class="modal-box share-modal-box">
      <div class="modal-title">Share Trip</div>

      ${isOwner ? `
        <div class="share-section">
          <div class="share-section-label">Invite someone</div>
          <div class="share-role-row">
            <span class="share-role-label">Join as:</span>
            <select id="invite-role" class="dark-input share-role-dropdown">
              <option value="editor">Editor — can view &amp; edit</option>
              <option value="viewer">Viewer — read only</option>
            </select>
          </div>
          <div class="share-link-row">
            <input class="dark-input share-link-input" id="invite-link-input"
              readonly placeholder="Click Generate to create a link">
            <button class="add-btn" id="gen-link-btn">Generate</button>
            <button class="ghost-btn" id="copy-link-btn" style="display:none">Copy</button>
          </div>
          <p class="share-hint">Send the link to your collaborator. Each link can be used once.</p>
        </div>

        ${memberUids.length > 0 ? `
          <div class="share-section">
            <div class="share-section-label">Collaborators (${memberUids.length})</div>
            <div id="share-members-list">${memberRows}</div>
          </div>
        ` : ''}
      ` : `
        <div class="share-section share-viewer-info">
          <span class="role-badge role-${myRole}">${myRole || 'viewer'}</span>
          <p>Shared with you by <strong>${esc(tripData.ownerName || 'the trip owner')}</strong>.</p>
          ${myRole !== 'editor'
            ? '<p class="share-readonly-note">You have read-only access. Ask the owner for edit access.</p>'
            : '<p>You can view and edit this trip.</p>'
          }
        </div>
      `}

      <div class="modal-actions">
        <button class="ghost-btn" id="share-close-btn">Close</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  document.getElementById('share-close-btn').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  if (!isOwner) return;

  // ── Generate invite link ──────────────────────────────────────────────────
  document.getElementById('gen-link-btn').addEventListener('click', async () => {
    const btn = document.getElementById('gen-link-btn');
    btn.textContent = 'Generating…';
    btn.disabled    = true;
    try {
      const role = document.getElementById('invite-role').value;
      const code = await createInvite(tripId, role, uid);
      const link = `${location.origin}${location.pathname}#/join/${code}`;
      document.getElementById('invite-link-input').value = link;
      document.getElementById('copy-link-btn').style.display = '';
    } catch (e) {
      alert('Failed to generate invite link: ' + e.message);
    } finally {
      btn.textContent = 'Generate';
      btn.disabled    = false;
    }
  });

  document.getElementById('copy-link-btn').addEventListener('click', () => {
    const link = document.getElementById('invite-link-input').value;
    navigator.clipboard.writeText(link).then(() => {
      const btn = document.getElementById('copy-link-btn');
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
    });
  });

  // ── Role changes (delegated) ──────────────────────────────────────────────
  overlay.addEventListener('change', async e => {
    if (!e.target.matches('.share-role-select')) return;
    const targetUid = e.target.dataset.uid;
    try {
      await updateMemberRole(tripId, targetUid, e.target.value);
    } catch (err) { console.warn('Role update failed:', err); }
  });

  // ── Remove member (delegated) ─────────────────────────────────────────────
  overlay.addEventListener('click', async e => {
    if (!e.target.matches('.share-remove-btn')) return;
    const targetUid = e.target.dataset.uid;
    if (!confirm('Remove this collaborator from the trip?')) return;
    try {
      await removeMember(tripId, targetUid);
      e.target.closest('.share-member-row').remove();
    } catch (err) { console.warn('Remove member failed:', err); }
  });
}

// ── Copy-days-to-my-trip modal ────────────────────────────────────────────────
// Shows when a viewer clicks "Copy Days to My Trip" in the planner.

import { rdIndex, rdTrip, copyDaysToTrip } from './store.js';

export function openCopyDaysModal(sharedTripId, days, uid) {
  document.getElementById('copy-days-overlay')?.remove();

  // Find trips the user owns (or all local trips if guest)
  const allLocal = rdIndex().map(m => rdTrip(m.id)).filter(Boolean);
  const ownTrips = uid
    ? allLocal.filter(t => t.id !== sharedTripId && (t.ownerId === uid || !t.ownerId))
    : allLocal.filter(t => t.id !== sharedTripId);

  const tripOptions = ownTrips.length
    ? ownTrips.map(t => `<option value="${t.id}">${esc(t.name)}</option>`).join('')
    : '<option disabled>No own trips found — create one first</option>';

  const dayRows = days.map((d, i) => `
    <label class="copy-day-row">
      <input type="checkbox" class="copy-day-check" value="${i}">
      <span class="copy-day-date">${_fmtShort(d.date)}</span>
      <span class="copy-day-dest">${esc(d.destination || 'Unknown')}</span>
      ${d.event ? `<span class="copy-day-event">${esc(d.event)}</span>` : ''}
    </label>
  `).join('');

  const overlay = document.createElement('div');
  overlay.className    = 'modal-overlay';
  overlay.id           = 'copy-days-overlay';
  overlay.style.display = 'flex';
  overlay.innerHTML = `
    <div class="modal-box copy-days-box">
      <div class="modal-title">Copy Days to My Trip</div>
      <div class="copy-days-target-row">
        <label>Copy into:</label>
        <select id="copy-target-trip" class="dark-input">
          ${tripOptions}
        </select>
      </div>
      <div class="copy-day-list">${dayRows}</div>
      <div class="copy-select-all-row">
        <button class="ghost-btn" id="copy-select-all">Select all</button>
        <button class="ghost-btn" id="copy-select-none">Clear</button>
      </div>
      <div class="modal-actions">
        <button class="add-btn" id="copy-confirm-btn" ${!ownTrips.length ? 'disabled' : ''}>Copy selected</button>
        <button class="ghost-btn" id="copy-cancel-btn">Cancel</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  document.getElementById('copy-cancel-btn').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  document.getElementById('copy-select-all').addEventListener('click', () => {
    overlay.querySelectorAll('.copy-day-check').forEach(cb => { cb.checked = true; });
  });
  document.getElementById('copy-select-none').addEventListener('click', () => {
    overlay.querySelectorAll('.copy-day-check').forEach(cb => { cb.checked = false; });
  });

  document.getElementById('copy-confirm-btn').addEventListener('click', async () => {
    const checked  = [...overlay.querySelectorAll('.copy-day-check:checked')];
    if (!checked.length) { alert('Select at least one day.'); return; }
    const selected = checked.map(cb => days[Number(cb.value)]);
    const targetId = document.getElementById('copy-target-trip').value;
    const btn      = document.getElementById('copy-confirm-btn');
    btn.textContent = 'Copying…';
    btn.disabled    = true;
    try {
      await copyDaysToTrip(selected, targetId, uid);
      close();
      alert(`${selected.length} day${selected.length !== 1 ? 's' : ''} copied successfully.`);
    } catch (e) {
      console.warn('Copy failed:', e);
      alert('Copy failed: ' + e.message);
      btn.textContent = 'Copy selected';
      btn.disabled    = false;
    }
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function _fmtShort(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
}
