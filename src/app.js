// ── Trip Planner View ─────────────────────────────────────────────────────────
// Renders the Planner + Calendar tabs for a single trip.
// Role-aware: owners/editors can edit; viewers get a read-only view with a
// "Copy Days to My Trip" option.

import { DatePicker }       from './datepicker.js';
import { createTripStore, getRole, canEdit } from './store.js';
import { renderPlanner }    from './planner.js';
import { renderCalendar }   from './calendar.js';
import { getCurrentUser, renderAuthHeader } from './auth.js';
import { navigate }         from './router.js';
import { openShareModal, openCopyDaysModal, openAddDayModal } from './sharing.js';

let _store = null;

export function createApp(root, tripId) {
  if (_store) { _store.destroy(); _store = null; }

  const user = getCurrentUser();
  const uid  = user?.uid || null;

  _store = createTripStore(tripId, uid, updatedDays => {
    trips = updatedDays;
    refresh();
  });

  // ── Determine role (may update after Firestore snapshot arrives) ───────────
  let tripData  = _store.tripData();
  let userRole  = getRole(tripData, uid); // 'owner' | 'editor' | 'viewer' | null
  let isReadOnly = userRole === 'viewer';

  // ── Shell HTML ─────────────────────────────────────────────────────────────
  root.innerHTML = `
    <div class="topbar">
      <div class="topbar-left">
        <button class="ghost-btn back-btn" id="back-btn">← All Trips</button>
        <div class="logo">trippy<span>.</span>planner</div>
        <span class="trip-name-label" id="trip-name-label"></span>
      </div>
      <div class="topbar-right">
        <div class="tabs">
          <button class="tab active" data-tab="planner">Planner</button>
          <button class="tab"        data-tab="calendar">Calendar</button>
        </div>
        <button class="ghost-btn globe-nav-btn" id="globe-nav-btn">🌍 Globe</button>
        <button class="ghost-btn share-trip-btn" id="share-trip-btn" style="display:none">Share</button>
        <button class="ghost-btn copy-days-btn"  id="copy-days-btn"  style="display:none">Copy Days →</button>
        <div class="auth-slot"></div>
      </div>
    </div>

    ${isReadOnly ? `
      <div class="readonly-banner">
        <span>👁 Read-only — you are a <strong>viewer</strong> on this shared trip</span>
      </div>
    ` : ''}

    <!-- ── Planner Tab ───────────────────────────────────────────────────── -->
    <div id="tab-planner">
      ${!isReadOnly ? `
        <div class="section-label">Add a new day</div>
        <div class="add-bar">
          <div class="field-group date-picker-wrap" id="dp-wrap">
            <label>Date</label>
            <input class="dark-input" id="new-date-display"
              placeholder="Pick a date" readonly>
          </div>
          <div class="field-group">
            <label>Destination</label>
            <input class="dark-input" id="new-dest"
              placeholder="e.g. Paris, France">
          </div>
          <button class="add-btn" id="add-btn">+ Add Day</button>
        </div>
        <hr class="divider">
      ` : ''}

      <div class="metrics" id="metrics-row" style="display:none">
        <div class="metric">
          <div class="metric-label">Total Days</div>
          <div class="metric-value" id="m-days">0</div>
        </div>
        <div class="metric">
          <div class="metric-label">Travel Days</div>
          <div class="metric-value" id="m-travel">0</div>
        </div>
        <div class="metric">
          <div class="metric-label">Total Cost (AUD)</div>
          <div class="metric-value" id="m-cost">$0.00</div>
        </div>
      </div>

      <div id="itinerary-list"></div>

      <div id="progress-wrap" style="display:none" class="progress-wrap">
        <div class="progress-header">
          <span class="progress-label">Trip progress</span>
          <span class="progress-count" id="progress-count">0 / 0 days finalised</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" id="progress-fill" style="width:0%"></div>
        </div>
      </div>

      ${!isReadOnly ? `
        <div class="io-row">
          <button class="ghost-btn" id="download-btn">↓ Download CSV</button>
          <button class="ghost-btn" id="upload-btn">↑ Load Plan</button>
          <input type="file" id="upload-input" accept=".csv" style="display:none">
        </div>
      ` : ''}
    </div>

    <!-- ── Calendar Tab ──────────────────────────────────────────────────── -->
    <div id="tab-calendar" style="display:none">
      <div class="cal-nav">
        <button class="cal-nav-btn" id="cal-prev">&#8249; Prev</button>
        <span class="cal-title" id="cal-title"></span>
        <button class="cal-nav-btn" id="cal-next">Next &#8250;</button>
      </div>
      <div class="cal-grid" id="cal-days-header"></div>
      <div style="height:6px"></div>
      <div class="cal-grid" id="cal-body"></div>
    </div>
  `;

  // ── State ──────────────────────────────────────────────────────────────────
  let trips     = _store.getAll();
  let openId    = null;
  let activeTab = 'planner';

  const now = new Date();
  let calYear  = now.getFullYear();
  let calMonth = now.getMonth();

  // Show trip name
  root.querySelector('#trip-name-label').textContent = _store.tripName();

  renderAuthHeader(root);

  // ── Show/hide role-based buttons ───────────────────────────────────────────
  function updateRoleButtons() {
    tripData  = _store.tripData();
    userRole  = getRole(tripData, uid);
    isReadOnly = userRole === 'viewer';

    const shareBtn    = root.querySelector('#share-trip-btn');
    const copyDaysBtn = root.querySelector('#copy-days-btn');

    if (userRole === 'owner' && uid) {
      shareBtn.style.display    = '';
      copyDaysBtn.style.display = 'none';
    } else if (userRole === 'viewer') {
      shareBtn.style.display    = 'none';
      copyDaysBtn.style.display = '';
    } else if (userRole === 'editor') {
      shareBtn.style.display    = 'none';
      copyDaysBtn.style.display = 'none';
    }
  }
  updateRoleButtons();

  // ── Navigation ─────────────────────────────────────────────────────────────
  root.querySelector('#back-btn').addEventListener('click', () => navigate('/'));
  root.querySelector('#globe-nav-btn').addEventListener('click', () => navigate(`/globe/${tripId}`));

  root.querySelector('#share-trip-btn').addEventListener('click', () => {
    openShareModal(tripId, _store.tripData(), uid);
  });

  root.querySelector('#copy-days-btn').addEventListener('click', () => {
    openCopyDaysModal(tripId, _store.getAll(), uid);
  });

  // ── Date Picker (edit mode only) ───────────────────────────────────────────
  let selectedDate = null;
  let dp           = null;

  if (!isReadOnly) {
    const dpWrap  = root.querySelector('#dp-wrap');
    const dpInput = root.querySelector('#new-date-display');
    dp = new DatePicker(dpWrap, dpInput, ds => { selectedDate = ds; });
    dp.init();

    const destInput = root.querySelector('#new-dest');

    function addDay() {
      const dest = destInput.value.trim();
      if (!selectedDate || !dest) {
        dpInput.style.borderColor   = !selectedDate ? 'var(--accent)' : '';
        destInput.style.borderColor = !dest ? 'var(--accent)' : '';
        return;
      }
      dpInput.style.borderColor   = '';
      destInput.style.borderColor = '';
      _store.add(selectedDate, dest);
      selectedDate = null;
      dp.reset();
      destInput.value = '';
      destInput.focus();
    }

    root.querySelector('#add-btn').addEventListener('click', addDay);
    destInput.addEventListener('keydown', e => { if (e.key === 'Enter') addDay(); });

    // CSV
    root.querySelector('#download-btn').addEventListener('click', () => {
      const blob = new Blob([_store.toCSV()], { type: 'text/csv' });
      const a    = document.createElement('a');
      a.href     = URL.createObjectURL(blob);
      a.download = `${_store.tripName().replace(/\s+/g, '_')}.csv`;
      a.click();
      URL.revokeObjectURL(a.href);
    });

    root.querySelector('#upload-btn').addEventListener('click', () => {
      root.querySelector('#upload-input').click();
    });

    root.querySelector('#upload-input').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const lines  = ev.target.result.trim().split('\n').slice(1);
        const loaded = lines.map(line => {
          const p     = line.match(/(".*?"|[^,]+)/g) || [];
          const clean = p.map(v => v.replace(/^"|"$/g, '').replace(/""/g, '"'));
          return {
            id:            Date.now().toString(36) + Math.random().toString(36).slice(2),
            date:          clean[0] || '',
            destination:   clean[1] || '',
            event:         clean[2] || '',
            travelDay:     clean[3] === 'Y',
            accommodation: clean[4] || '',
            accomCost:     parseFloat(clean[5]) || 0,
            travelDetails: clean[6] || '',
            travelCost:    parseFloat(clean[7]) || 0,
            finalised:     clean[8] === 'Y',
          };
        }).filter(t => t.date && t.destination);
        _store.loadFromCSV(loaded);
      };
      reader.readAsText(file);
      e.target.value = '';
    });
  }

  // ── Tabs ───────────────────────────────────────────────────────────────────
  root.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeTab = btn.dataset.tab;
      root.querySelectorAll('.tab').forEach(b =>
        b.classList.toggle('active', b.dataset.tab === activeTab));
      root.querySelector('#tab-planner').style.display  = activeTab === 'planner'  ? '' : 'none';
      root.querySelector('#tab-calendar').style.display = activeTab === 'calendar' ? '' : 'none';
      if (activeTab === 'calendar') renderCalendar(root, trips, calYear, calMonth);
    });
  });

  root.querySelector('#cal-prev').addEventListener('click', () => {
    calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; }
    renderCalendar(root, trips, calYear, calMonth);
  });
  root.querySelector('#cal-next').addEventListener('click', () => {
    calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; }
    renderCalendar(root, trips, calYear, calMonth);
  });

  // ── Refresh ────────────────────────────────────────────────────────────────
  // Wrap store for read-only viewers: allow reads, no-op writes.
  function _makeStoreProxy() {
    if (!isReadOnly) return _store;
    return new Proxy(_store, {
      get(target, prop) {
        if (['add', 'update', 'remove', 'loadFromCSV'].includes(prop)) return () => {};
        return target[prop];
      },
    });
  }

  function refresh() {
    updateRoleButtons();
    root.querySelector('#trip-name-label').textContent = _store.tripName();
    const plannerOpts = (uid && userRole !== 'owner')
      ? { onAddDay: day => openAddDayModal(day, tripId, uid) }
      : {};
    renderPlanner(root, trips, _makeStoreProxy(), openId, id => {
      openId = id;
      refresh();
    }, plannerOpts);
    if (activeTab === 'calendar') renderCalendar(root, trips, calYear, calMonth);
  }

  refresh();
}
