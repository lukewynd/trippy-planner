// ── Globe View ────────────────────────────────────────────────────────────────
// 3D interactive globe (globe.gl / Three.js) showing the trip route.
// Left panel: globe canvas. Right panel: scrollable day list.
// Clicking a day card animates the globe to that destination.

import Globe from 'globe.gl';
import { createTripStore } from './store.js';
import { geocodeAll }      from './geocode.js';
import { getCurrentUser, renderAuthHeader } from './auth.js';
import { navigate }        from './router.js';

let _store  = null;
let _globe  = null;

export function renderGlobe(root, tripId) {
  if (_store) { _store.destroy(); _store = null; }
  if (_globe) { _globe = null; }

  const uid = getCurrentUser()?.uid || null;

  root.innerHTML = `
    <div class="globe-page">
      <div class="topbar globe-topbar">
        <div class="topbar-left">
          <button class="ghost-btn" id="globe-back">← Back</button>
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="auth-slot"></div>
      </div>
      <div class="globe-layout">
        <div class="globe-container" id="globe-container">
          <div class="globe-loading" id="globe-loading">Geocoding destinations…</div>
        </div>
        <div class="globe-panel">
          <div class="globe-panel-title">Trip Days</div>
          <div class="globe-day-list" id="globe-day-list">
            <div class="globe-panel-hint">Loading trip…</div>
          </div>
        </div>
      </div>
    </div>
  `;

  renderAuthHeader(root);
  root.querySelector('#globe-back').addEventListener('click', () => navigate(`/trip/${tripId}`));

  _store = createTripStore(tripId, uid, days => _buildGlobe(root, days, tripId));
  _buildGlobe(root, _store.getAll(), tripId);
}

async function _buildGlobe(root, days, tripId) {
  const panel = root.querySelector('#globe-day-list');
  const loading = root.querySelector('#globe-loading');
  if (!panel) return;

  if (days.length === 0) {
    panel.innerHTML = `<div class="globe-empty">No days in this trip yet. <button class="ghost-btn globe-back-link" style="display:inline;border:none;padding:0;color:var(--accent)">Add some →</button></div>`;
    panel.querySelector('.globe-back-link')?.addEventListener('click', () => navigate(`/trip/${tripId}`));
    if (loading) loading.style.display = 'none';
    return;
  }

  // Render day list immediately (instant feedback)
  panel.innerHTML = days.map((d, i) => `
    <div class="globe-day-item" data-dest="${esc(d.destination)}" data-idx="${i}">
      <div class="globe-day-date">${_fmtShort(d.date)}</div>
      <div class="globe-day-dest">${esc(d.destination || 'Unknown')}</div>
      ${d.event ? `<div class="globe-day-event">${esc(d.event)}</div>` : ''}
      ${d.travelDay ? '<span class="globe-travel-badge">Travel</span>' : ''}
    </div>
  `).join('');

  // Geocode unique destinations
  if (loading) { loading.textContent = 'Geocoding destinations…'; loading.style.display = 'flex'; }
  const uniqueDests = [...new Set(days.map(d => d.destination).filter(Boolean))];
  const coords = await geocodeAll(uniqueDests);
  if (loading) loading.style.display = 'none';

  // Points
  const points = uniqueDests
    .filter(d => coords[d])
    .map(dest => ({ dest, lat: coords[dest].lat, lng: coords[dest].lng }));

  // Arcs: connect days where destination changes
  const arcs = [];
  for (let i = 1; i < days.length; i++) {
    const from = days[i - 1].destination;
    const to   = days[i].destination;
    if (from !== to && coords[from] && coords[to]) {
      arcs.push({ startLat: coords[from].lat, startLng: coords[from].lng,
                  endLat:   coords[to].lat,   endLng:   coords[to].lng });
    }
  }

  const container = root.querySelector('#globe-container');
  if (!container) return;
  // Clear previous globe (if re-called on data update)
  container.innerHTML = '<div class="globe-loading" id="globe-loading" style="display:none"></div>';

  const el = document.createElement('div');
  el.style.cssText = 'width:100%;height:100%';
  container.appendChild(el);

  _globe = Globe()(el);
  _globe
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundColor('rgba(0,0,0,0)')
    .atmosphereColor('#7c6af7')
    .atmosphereAltitude(0.18)
    .pointsData(points)
    .pointLat('lat')
    .pointLng('lng')
    .pointColor(() => '#7c6af7')
    .pointRadius(0.45)
    .pointAltitude(0.02)
    .arcsData(arcs)
    .arcStartLat('startLat').arcStartLng('startLng')
    .arcEndLat('endLat').arcEndLng('endLng')
    .arcColor(() => '#7c6af7')
    .arcStroke(0.5)
    .arcAltitudeAutoScale(0.4)
    .arcDashLength(0.5)
    .arcDashGap(0.2)
    .arcDashAnimateTime(2000);

  // Auto-rotate; stop on first user touch
  const ctrl = _globe.controls();
  ctrl.autoRotate = true;
  ctrl.autoRotateSpeed = 0.5;
  el.addEventListener('pointerdown', () => { ctrl.autoRotate = false; }, { passive: true });

  // Fly to first destination
  if (points.length > 0) {
    _globe.pointOfView({ lat: points[0].lat, lng: points[0].lng, altitude: 2.5 }, 1200);
  }

  // Highlight first day
  const first = panel.querySelector('.globe-day-item');
  if (first) first.classList.add('active');

  // Day click → fly globe there
  panel.addEventListener('click', e => {
    const item = e.target.closest('.globe-day-item');
    if (!item) return;
    const dest = item.dataset.dest;
    if (dest && coords[dest]) {
      ctrl.autoRotate = false;
      _globe.pointOfView({ lat: coords[dest].lat, lng: coords[dest].lng, altitude: 2 }, 1000);
      panel.querySelectorAll('.globe-day-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });
}

function _fmtShort(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
