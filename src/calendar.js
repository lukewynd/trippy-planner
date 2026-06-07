// ── Calendar Tab ──────────────────────────────────────────────────────────────

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const DAYS_LONG = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;');
}

function fmtDate(ds) {
  if (!ds) return '';
  const [y, m, d] = ds.split('-');
  return `${parseInt(d)} ${MONTHS[parseInt(m) - 1]} ${y}`;
}

function fmtCost(n) {
  return '$' + Number(n).toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function showDayModal(day) {
  const existing = document.getElementById('cal-day-modal');
  if (existing) existing.remove();

  const row = (label, val) => val
    ? `<div class="cdm-row"><span class="cdm-label">${label}</span><span class="cdm-val">${esc(String(val))}</span></div>`
    : '';

  const overlay = document.createElement('div');
  overlay.id = 'cal-day-modal';
  overlay.className = 'cal-day-modal-overlay';
  overlay.innerHTML = `
    <div class="cal-day-modal">
      <button class="cdm-close" id="cdm-close">✕</button>
      <div class="cdm-date">${fmtDate(day.date)}</div>
      <div class="cdm-dest">${esc(day.destination || '')}</div>
      ${day._tripName ? `<div class="cdm-trip-name">${esc(day._tripName)}</div>` : ''}
      <div class="cdm-body">
        ${row('Event / Activity', day.event)}
        ${row('Accommodation', day.accommodation)}
        ${day.accomCost  ? row('Accom Cost',  fmtCost(day.accomCost))  : ''}
        ${row('Travel Details', day.travelDetails)}
        ${day.travelCost ? row('Travel Cost', fmtCost(day.travelCost)) : ''}
        ${(day.finalised || day.travelDay) ? `
          <div class="cdm-badges">
            ${day.finalised  ? `<span class="day-badge badge-final">Finalised</span>`   : ''}
            ${day.travelDay  ? `<span class="day-badge badge-travel">Travel Day</span>` : ''}
          </div>` : ''}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector('#cdm-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

export function renderCalendar(container, trips, year, month, ids = {}) {
  const titleEl  = container.querySelector(ids.title  || '#cal-title');
  const headerEl = container.querySelector(ids.header || '#cal-days-header');
  const bodyEl   = container.querySelector(ids.body   || '#cal-body');

  if (!titleEl || !headerEl || !bodyEl) return;

  titleEl.textContent = `${MONTHS[month]} ${year}`;

  // Day-of-week header
  headerEl.innerHTML = DAYS_LONG
    .map(d => `<div class="cal-header-cell">${d}</div>`)
    .join('');

  // Build trip lookup map: date string → day object
  const tripMap = {};
  trips.forEach(t => { if (t.date) tripMap[t.date] = t; });

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today       = new Date();

  let html = '';

  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-cell empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const ds = `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday =
      today.getFullYear() === year &&
      today.getMonth()    === month &&
      today.getDate()     === d;

    const t = tripMap[ds];
    let cls = 'cal-cell';
    if (isToday) cls += ' today';
    else if (t)  cls += ' has-trip';
    if (t) cls += ' cal-clickable';

    let inner = `<div class="cal-date-num${isToday ? ' today-num' : ''}">${d}</div>`;

    if (t) {
      inner += `<div class="cal-dest">${esc(t.destination)}</div>`;
      if (t.event)
        inner += `<div class="cal-note">${esc(t.event)}</div>`;
      if (t.travelDetails)
        inner += `<div class="cal-travel-note">${esc(t.travelDetails)}</div>`;
    }

    html += `<div class="${cls}"${t ? ` data-date="${ds}"` : ''}>${inner}</div>`;
  }

  bodyEl.innerHTML = html;

  // Delegated click → open day detail modal
  bodyEl.onclick = e => {
    const cell = e.target.closest('[data-date]');
    if (!cell) return;
    const day = tripMap[cell.dataset.date];
    if (day) showDayModal(day);
  };
}
