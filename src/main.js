import './style.css';
import { initFirebase }  from './firebase.js';
import { initAuth }      from './auth.js';
import { createRouter }  from './router.js';
import { renderLanding } from './landing.js';
import { createApp }     from './app.js';
import { renderGlobe }   from './globe.js';

const root = document.getElementById('app');

initFirebase();

const router = createRouter({
  '/':          ()       => renderLanding(root),
  '/trip/:id':  ({ id }) => createApp(root, id),
  '/globe/:id': ({ id }) => renderGlobe(root, id),
});

initAuth(() => router.refresh());

router.start();
