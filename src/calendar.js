// ── Calendar Tab ──────────────────────────────────────────────────────────────

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const DAYS_LONG = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;');
}

export function renderCalendar(container, trips, year, month) {
  const titleEl = container.querySelector('#cal-title');
  const headerEl = container.querySelector('#cal-days-header');
  const bodyEl   = container.querySelector('#cal-body');

  if (!titleEl || !headerEl || !bodyEl) return;

  titleEl.textContent = `${MONTHS[month]} ${year}`;

  // Day-of-week header
  headerEl.innerHTML = DAYS_LONG
    .map(d => `<div class="cal-header-cell">${d}</div>`)
    .join('');

  // Build trip lookup map: date string → trip
  const tripMap = {};
  trips.forEach(t => { if (t.date) tripMap[t.date] = t; });

  const firstDay   = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today      = new Date();

  let html = '';

  // Leading empty cells
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

    let inner = `<div class="cal-date-num${isToday ? ' today-num' : ''}">${d}</div>`;

    if (t) {
      inner += `<div class="cal-dest">${esc(t.destination)}</div>`;
      if (t.event)
        inner += `<div class="cal-note">${esc(t.event)}</div>`;
      if (t.travelDetails)
        inner += `<div class="cal-travel-note">${esc(t.travelDetails)}</div>`;
    }

    html += `<div class="${cls}">${inner}</div>`;
  }

  bodyEl.innerHTML = html;
}
