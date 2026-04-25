// ── Planner Tab ───────────────────────────────────────────────────────────────

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

function formatDisplay(ds) {
  if (!ds) return '';
  const [y, m, d] = ds.split('-');
  return `${d} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
}

export function renderPlanner(container, trips, store, openId, setOpen) {
  const metrics = store.metrics();

  // ── Metrics ────────────────────────────────────────────────────────────────
  const metricsEl = container.querySelector('#metrics-row');
  if (metricsEl) {
    metricsEl.style.display = trips.length ? 'grid' : 'none';
    container.querySelector('#m-days').textContent   = metrics.total;
    container.querySelector('#m-travel').textContent = metrics.travelDays;
    container.querySelector('#m-cost').textContent   =
      '$' + Number(metrics.cost).toLocaleString('en-AU', {minimumFractionDigits:2, maximumFractionDigits:2});
  }

  // ── Progress ───────────────────────────────────────────────────────────────
  const progWrap = container.querySelector('#progress-wrap');
  if (progWrap) {
    if (trips.length) {
      progWrap.style.display = 'block';
      const pct = metrics.total ? Math.round((metrics.finalised / metrics.total) * 100) : 0;
      container.querySelector('#progress-fill').style.width  = pct + '%';
      container.querySelector('#progress-count').textContent =
        `${metrics.finalised} / ${metrics.total} days finalised`;
    } else {
      progWrap.style.display = 'none';
    }
  }

  // ── Day List ───────────────────────────────────────────────────────────────
  const list = container.querySelector('#itinerary-list');
  if (!list) return;

  if (trips.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">✈</div>
        <p>No days yet — add your first destination above</p>
      </div>`;
    return;
  }

  list.innerHTML = trips.map(t => {
    const isOpen = openId === t.id;
    const badge  = t.finalised
      ? `<span class="day-badge badge-final">Finalised</span>`
      : t.travelDay
        ? `<span class="day-badge badge-travel">Travel</span>`
        : `<span class="day-badge badge-pending">Pending</span>`;

    const detail = isOpen ? `
      <div class="day-detail">
        <div class="detail-grid">
          <div class="detail-field">
            <label>Event / Activity</label>
            <input class="dark-input" data-id="${t.id}" data-field="event"
              value="${esc(t.event)}" placeholder="e.g. Visit Eiffel Tower">
          </div>
          <div class="detail-field">
            <label>Accommodation</label>
            <input class="dark-input" data-id="${t.id}" data-field="accommodation"
              value="${esc(t.accommodation)}" placeholder="Hotel / Airbnb name">
          </div>
          <div class="detail-field">
            <label>Accommodation Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${t.id}" data-field="accomCost" value="${t.accomCost}">
          </div>
          <div class="detail-field">
            <label>Travel Cost (AUD)</label>
            <input class="dark-input" type="number" min="0" step="10"
              data-id="${t.id}" data-field="travelCost" value="${t.travelCost}">
          </div>
          <div class="detail-field detail-full">
            <label>Travel Details</label>
            <input class="dark-input" data-id="${t.id}" data-field="travelDetails"
              value="${esc(t.travelDetails)}" placeholder="Flight / train / driving info">
          </div>
        </div>
        <div class="detail-row">
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${t.id}" data-field="travelDay"
              ${t.travelDay ? 'checked' : ''}>
            Travel day
          </label>
          <label class="toggle-wrap">
            <input type="checkbox" class="toggle" data-id="${t.id}" data-field="finalised"
              ${t.finalised ? 'checked' : ''}>
            Finalised
          </label>
          <button class="delete-btn" data-delete="${t.id}">Remove</button>
        </div>
      </div>` : '';

    return `
      <div class="day-card">
        <div class="day-header" data-toggle="${t.id}">
          <div class="day-dot"></div>
          <div class="day-date">${formatDisplay(t.date)}</div>
          <div class="day-dest">${esc(t.destination)}</div>
          ${badge}
          <span class="chevron${isOpen ? ' open' : ''}">&#9654;</span>
        </div>
        ${detail}
      </div>`;
  }).join('');

  // ── Event Delegation ────────────────────────────────────────────────────────
  list.querySelectorAll('[data-toggle]').forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.toggle;
      setOpen(openId === id ? null : id);
    });
  });

  list.querySelectorAll('[data-field]').forEach(el => {
    const handler = () => {
      const val = el.type === 'checkbox' ? el.checked : el.value;
      store.update(el.dataset.id, el.dataset.field, val);
    };
    el.addEventListener(el.type === 'checkbox' ? 'change' : 'blur', handler);
  });

  list.querySelectorAll('[data-delete]').forEach(el => {
    el.addEventListener('click', () => {
      if (confirm('Remove this day from your trip?')) {
        store.remove(el.dataset.delete);
      }
    });
  });
}
