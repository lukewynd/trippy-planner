// ── Hash Router ───────────────────────────────────────────────────────────────
// Maps #/ hash paths to handler functions.
// Patterns support :param segments, e.g. '/trip/:id'.

let _routes = {};

export function createRouter(routeMap) {
  _routes = routeMap;
  window.addEventListener('hashchange', _resolve);
  return { start: _resolve, refresh: _resolve };
}

export function navigate(path) {
  window.location.hash = path;
}

function _resolve() {
  const hash = window.location.hash.slice(1) || '/';
  for (const [pattern, handler] of Object.entries(_routes)) {
    const params = _match(pattern, hash);
    if (params !== null) { handler(params); return; }
  }
  if (_routes['/']) _routes['/']({}); // fallback to home
}

function _match(pattern, path) {
  if (pattern === '/') return (path === '/' || path === '') ? {} : null;
  const pp = pattern.split('/').filter(Boolean);
  const hp = path.split('/').filter(Boolean);
  if (pp.length !== hp.length) return null;
  const params = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(':')) params[pp[i].slice(1)] = decodeURIComponent(hp[i]);
    else if (pp[i] !== hp[i]) return null;
  }
  return params;
}
