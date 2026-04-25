// ── DatePicker ────────────────────────────────────────────────────────────────
// A lightweight dropdown calendar picker.
// Usage:
//   const dp = new DatePicker(wrapEl, inputEl, onSelect);
//   dp.init();

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const DAYS_SHORT = ['Su','Mo','Tu','We','Th','Fr','Sa'];

export class DatePicker {
  constructor(wrapEl, inputEl, onSelect) {
    this.wrap    = wrapEl;
    this.input   = inputEl;
    this.onSelect = onSelect;
    this.selected = null;
    const now = new Date();
    this.year  = now.getFullYear();
    this.month = now.getMonth();
    this._dropdown = null;
    this._open = false;
  }

  init() {
    // Build dropdown element
    this._dropdown = document.createElement('div');
    this._dropdown.className = 'date-picker-dropdown';
    this._dropdown.innerHTML = `
      <div class="dp-nav">
        <button class="dp-nav-btn" id="dp-prev">&#8249;</button>
        <span class="dp-month" id="dp-month-label"></span>
        <button class="dp-nav-btn" id="dp-next">&#8250;</button>
      </div>
      <div class="dp-grid" id="dp-grid"></div>
    `;
    this.wrap.appendChild(this._dropdown);

    // Events
    this.input.addEventListener('click', () => this.toggle());
    this._dropdown.querySelector('#dp-prev').addEventListener('click', () => this.navigate(-1));
    this._dropdown.querySelector('#dp-next').addEventListener('click', () => this.navigate(1));

    document.addEventListener('click', (e) => {
      if (!this.wrap.contains(e.target)) this.close();
    });

    this.render();
  }

  toggle() {
    this._open ? this.close() : this.open();
  }

  open() {
    this._open = true;
    this._dropdown.style.display = 'block';
    this.render();
  }

  close() {
    this._open = false;
    this._dropdown.style.display = 'none';
  }

  navigate(dir) {
    this.month += dir;
    if (this.month < 0)  { this.month = 11; this.year--; }
    if (this.month > 11) { this.month = 0;  this.year++; }
    this.render();
  }

  render() {
    const label = this._dropdown.querySelector('#dp-month-label');
    const grid  = this._dropdown.querySelector('#dp-grid');
    label.textContent = `${MONTHS[this.month]} ${this.year}`;

    const firstDay = new Date(this.year, this.month, 1).getDay();
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    const today = new Date();

    let html = DAYS_SHORT.map(d => `<div class="dp-dh">${d}</div>`).join('');

    // Empty cells before the 1st
    for (let i = 0; i < firstDay; i++) {
      html += `<button class="dp-day empty" disabled></button>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const ds = this.dateString(this.year, this.month + 1, d);
      const isSelected = this.selected === ds;
      const isToday =
        today.getFullYear() === this.year &&
        today.getMonth()    === this.month &&
        today.getDate()     === d;

      let cls = 'dp-day';
      if (isSelected) cls += ' selected';
      else if (isToday) cls += ' today';

      html += `<button class="${cls}" data-date="${ds}">${d}</button>`;
    }

    grid.innerHTML = html;

    grid.querySelectorAll('.dp-day:not(.empty)').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selected = btn.dataset.date;
        this.input.value = this.formatDisplay(this.selected);
        this.close();
        this.onSelect(this.selected);
      });
    });
  }

  dateString(y, m, d) {
    return `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
  }

  formatDisplay(ds) {
    const [y, m, d] = ds.split('-');
    return `${d} ${MONTHS[parseInt(m) - 1]} ${y}`;
  }

  reset() {
    this.selected = null;
    this.input.value = '';
  }
}
