import './style.css';
import { initFirebase }              from './firebase.js';
import { initAuth, getCurrentUser, renderAuthHeader } from './auth.js';
import { createRouter, navigate }    from './router.js';
import { renderLanding }             from './landing.js';
import { createApp }                 from './app.js';
import { renderGlobe }               from './globe.js';
import { joinViaInvite, migrateOldTrips } from './store.js';

const root = document.getElementById('app');

initFirebase();

const router = createRouter({
  '/':          ()       => renderLanding(root),
  '/trip/:id':  ({ id }) => createApp(root, id),
  '/globe/:id': ({ id }) => renderGlobe(root, id),
  '/join/:code': async ({ code }) => {
    const user = getCurrentUser();
    if (!user) {
      // Not signed in — show a friendly message and preserve the code
      root.innerHTML = `
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
          <div class="auth-slot"></div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">✈</div>
          <h2>You've been invited to a trip!</h2>
          <p>Sign in to accept the invite and view the shared trip.</p>
          <p class="join-hint">After signing in, open this link again to join.</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `;
      renderAuthHeader(root);
      root.querySelector('#join-home-btn')?.addEventListener('click', () => navigate('/'));
      return;
    }

    try {
      root.innerHTML = `
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⏳</div>
          <p>Joining trip…</p>
        </div>
      `;
      const tripId = await joinViaInvite(code, user.uid);
      navigate(`/trip/${tripId}`);
    } catch (e) {
      root.innerHTML = `
        <div class="topbar">
          <div class="logo">trippy<span>.</span>planner</div>
        </div>
        <div class="join-prompt">
          <div class="join-prompt-icon">⚠️</div>
          <h2>Could not join trip</h2>
          <p>${e.message}</p>
          <button class="add-btn" id="join-home-btn">Go to Home</button>
        </div>
      `;
      root.querySelector('#join-home-btn')?.addEventListener('click', () => navigate('/'));
    }
  },
});

initAuth(user => {
  if (user) {
    // Migrate old users/{uid}/trips/ data to top-level trips/ collection
    migrateOldTrips(user.uid, user.displayName || user.email || '');
  }
  router.refresh();
});

router.start();
