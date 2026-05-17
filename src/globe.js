// ── Map View ──────────────────────────────────────────────────────────────────
// Leaflet + CartoDB Dark tiles (free, no API key, unlimited use).
// Left: interactive map with route lines + markers.
// Right: scrollable day list — click a day to fly the map there.

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createTripStore } from './store.js';
import { geocodeAll }      from './geocode.js';
import { getCurrentUser, renderAuthHeader } from './auth.js';
import { navigate }        from './router.js';

let _store        = null;
let _map          = null;
let _panelHandler = null; // tracked so we can remove before re-adding

export function renderGlobe(root, tripId) {
  if (_store) { _store.destroy(); _store = null; }
  if (_map)   { _map.remove(); _map = null; }
  _panelHandler = null;

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
          <div id="map-inner" style="width:100%;height:100%"></div>
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

  // Init map — CartoDB Dark Matter tiles, no API key needed
  _map = L.map('map-inner', { zoomControl: true }).setView([20, 10], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(_map);

  _store = createTripStore(tripId, uid, days => _updateMap(root, days, tripId));
  _updateMap(root, _store.getAll(), tripId);
}

async function _updateMap(root, days, tripId) {
  const panel = root.querySelector('#globe-day-list');
  if (!panel || !_map) return;

  // Remove old panel click handler before rebuilding
  if (_panelHandler) { panel.removeEventListener('click', _panelHandler); _panelHandler = null; }

  // Clear all non-tile layers
  _map.eachLayer(layer => { if (!(layer instanceof L.TileLayer)) _map.removeLayer(layer); });

  if (days.length === 0) {
    panel.innerHTML = `<div class="globe-empty">No days in this trip yet.</div>`;
    return;
  }

  // Render day list immediately
  panel.innerHTML =
    `<div class="globe-panel-hint geocoding-hint">Locating destinations…</div>` +
    days.map((d, i) => `
      <div class="globe-day-item" data-dest="${esc(d.destination)}" data-idx="${i}">
        <div class="globe-day-date">${_fmtShort(d.date)}</div>
        <div class="globe-day-dest">${esc(d.destination || 'Unknown')}</div>
        ${d.event ? `<div class="globe-day-event">${esc(d.event)}</div>` : ''}
        ${d.travelDay ? '<span class="globe-travel-badge">Travel</span>' : ''}
      </div>
    `).join('');

  // Geocode unique destinations
  const uniqueDests = [...new Set(days.map(d => d.destination).filter(Boolean))];
  const coords = await geocodeAll(uniqueDests);
  panel.querySelector('.geocoding-hint')?.remove();

  // Highlight first day
  panel.querySelector('.globe-day-item')?.classList.add('active');

  // Route line (ordered by day)
  const routeCoords = days
    .filter(d => d.destination && coords[d.destination])
    .map(d => [coords[d.destination].lat, coords[d.destination].lng]);

  if (routeCoords.length > 1) {
    L.polyline(routeCoords, {
      color: '#7c6af7',
      weight: 2.5,
      opacity: 0.85,
      dashArray: '6 10',
    }).addTo(_map);
  }

  // Circle markers for each unique destination
  const markers = {};
  for (const dest of uniqueDests) {
    if (!coords[dest]) continue;
    const m = L.circleMarker([coords[dest].lat, coords[dest].lng], {
      radius: 7,
      fillColor: '#7c6af7',
      color: '#fff',
      weight: 1.5,
      fillOpacity: 0.9,
    }).addTo(_map);
    m.bindTooltip(dest, { direction: 'top', offset: [0, -8], className: 'map-tooltip' });
    markers[dest] = m;
  }

  // Fit map to show all markers
  if (routeCoords.length > 0) {
    _map.fitBounds(L.latLngBounds(routeCoords), { padding: [50, 50], maxZoom: 8 });
  }

  // Day click → fly map to that destination
  _panelHandler = e => {
    const item = e.target.closest('.globe-day-item');
    if (!item) return;
    const dest = item.dataset.dest;
    if (dest && coords[dest]) {
      _map.flyTo([coords[dest].lat, coords[dest].lng], 10, { duration: 1.5 });
      panel.querySelectorAll('.globe-day-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      markers[dest]?.openTooltip();
    }
  };
  panel.addEventListener('click', _panelHandler);
}

function _fmtShort(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' });
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
