// ── Geocoding via OpenStreetMap Nominatim (free, no API key) ──────────────────
// Results are cached in localStorage so destinations are only looked up once.

const CACHE_KEY = 'trippy-geocache';
let _chain = Promise.resolve(); // serialises requests to respect rate limit

function loadCache() {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}'); } catch { return {}; }
}

function saveCache(c) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(c)); } catch {}
}

export async function geocode(destination) {
  const key = destination.toLowerCase().trim();
  const cache = loadCache();
  if (cache[key]) return cache[key];

  // Chain requests through a shared promise so we send at most ~1 per 350 ms
  const result = await (_chain = _chain.then(async () => {
    await new Promise(r => setTimeout(r, 350));
    try {
      const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(destination)}`;
      const res  = await fetch(url, { headers: { 'Accept-Language': 'en' } });
      const data = await res.json();
      if (!data?.length) return null;
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    } catch { return null; }
  }));

  if (result) {
    const updated = loadCache();
    updated[key] = result;
    saveCache(updated);
  }
  return result;
}

// Geocode an array of destination strings; returns { dest: {lat,lng} | null }
export async function geocodeAll(destinations) {
  const unique  = [...new Set(destinations.filter(Boolean))];
  const results = {};
  for (const dest of unique) {
    results[dest] = await geocode(dest);
  }
  return results;
}
