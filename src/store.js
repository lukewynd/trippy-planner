// ── Trip Store ────────────────────────────────────────────────────────────────
// Simple reactive state manager for the trip list.
// Persists to localStorage automatically.

const STORAGE_KEY = 'trippy-planner-data';

const defaultTrip = () => ({
  id:            Date.now().toString(36) + Math.random().toString(36).slice(2),
  date:          '',
  destination:   '',
  event:         '',
  travelDay:     false,
  accommodation: '',
  accomCost:     0,
  travelDetails: '',
  travelCost:    0,
  finalised:     false,
});

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function save(trips) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trips));
  } catch {
    // Storage not available — silently continue
  }
}

export function createStore(onChange) {
  let trips = load();

  const notify = () => {
    save(trips);
    onChange([...trips]);
  };

  return {
    getAll: () => [...trips],

    add(date, destination) {
      const trip = defaultTrip();
      trip.date = date;
      trip.destination = destination;
      trips.push(trip);
      trips.sort((a, b) => a.date.localeCompare(b.date));
      notify();
    },

    update(id, field, value) {
      const t = trips.find(t => t.id === id);
      if (t) { t[field] = value; notify(); }
    },

    remove(id) {
      trips = trips.filter(t => t.id !== id);
      notify();
    },

    loadFromCSV(rows) {
      trips = rows;
      notify();
    },

    toCSV() {
      const header = ['Date','Destination','Event','Travel Day',
        'Accommodation','Accom Cost','Travel Details','Travel Cost','Finalised'];
      const rows = trips.map(t => [
        t.date, t.destination, t.event,
        t.travelDay   ? 'Y' : 'N',
        t.accommodation,
        t.accomCost,
        t.travelDetails,
        t.travelCost,
        t.finalised   ? 'Y' : 'N',
      ].map(v => `"${(v ?? '').toString().replace(/"/g, '""')}"`).join(','));
      return [header.join(','), ...rows].join('\n');
    },

    metrics() {
      const total     = trips.length;
      const travelDays = trips.filter(t => t.travelDay).length;
      const finalised  = trips.filter(t => t.finalised).length;
      const cost       = trips.reduce((s, t) =>
        s + Number(t.accomCost || 0) + Number(t.travelCost || 0), 0);
      return { total, travelDays, finalised, cost };
    },
  };
}
