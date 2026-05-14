import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getAuthInstance, isFirebaseConfigured } from './firebase.js';

let _user = null;

export function initAuth(onChange) {
  if (!isFirebaseConfigured()) { onChange(null); return; }
  const auth = getAuthInstance();
  if (!auth) { onChange(null); return; }
  onAuthStateChanged(auth, (user) => { _user = user; onChange(user); });
}

export const getCurrentUser = () => _user;

export async function signInWithGoogle() {
  return signInWithPopup(getAuthInstance(), new GoogleAuthProvider());
}

export async function signInEmail(email, password) {
  return signInWithEmailAndPassword(getAuthInstance(), email, password);
}

export async function createAccount(email, password) {
  return createUserWithEmailAndPassword(getAuthInstance(), email, password);
}

export async function signOut() {
  return fbSignOut(getAuthInstance());
}

// Renders the auth button/avatar into any element with class .auth-slot
export function renderAuthHeader(container) {
  const el = container.querySelector('.auth-slot');
  if (!el) return;

  if (!isFirebaseConfigured()) {
    el.innerHTML = `<span class="auth-guest-note">Guest mode</span>`;
    return;
  }

  if (_user) {
    const name = _user.displayName || _user.email || 'User';
    el.innerHTML = `
      <span class="auth-user-name">${esc(name)}</span>
      <button class="ghost-btn auth-signout-btn">Sign out</button>
    `;
    el.querySelector('.auth-signout-btn').addEventListener('click', () => signOut());
  } else {
    el.innerHTML = `<button class="ghost-btn auth-signin-btn">Sign in</button>`;
    el.querySelector('.auth-signin-btn').addEventListener('click', () => _showModal());
  }
}

function esc(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

function _showModal() {
  const existing = document.getElementById('auth-modal');
  if (existing) { existing.remove(); return; }

  const modal = document.createElement('div');
  modal.id = 'auth-modal';
  modal.className = 'auth-modal-overlay';
  modal.innerHTML = `
    <div class="auth-modal">
      <button class="auth-modal-close" id="auth-close">✕</button>
      <div class="auth-modal-title">Sign in</div>
      <button class="auth-google-btn" id="auth-google">Continue with Google</button>
      <div class="auth-divider">or</div>
      <input class="dark-input" id="auth-email" type="email" placeholder="Email">
      <input class="dark-input" id="auth-pass"  type="password" placeholder="Password" style="margin-top:8px">
      <div class="auth-modal-actions">
        <button class="add-btn"   id="auth-signin">Sign in</button>
        <button class="ghost-btn" id="auth-create">Create account</button>
      </div>
      <div class="auth-error" id="auth-err"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const setErr = msg => { modal.querySelector('#auth-err').textContent = msg; };

  modal.querySelector('#auth-close').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

  modal.querySelector('#auth-google').addEventListener('click', async () => {
    try { await signInWithGoogle(); modal.remove(); }
    catch (e) { setErr(e.message); }
  });

  modal.querySelector('#auth-signin').addEventListener('click', async () => {
    try {
      await signInEmail(modal.querySelector('#auth-email').value, modal.querySelector('#auth-pass').value);
      modal.remove();
    } catch (e) { setErr(e.message); }
  });

  modal.querySelector('#auth-create').addEventListener('click', async () => {
    try {
      await createAccount(modal.querySelector('#auth-email').value, modal.querySelector('#auth-pass').value);
      modal.remove();
    } catch (e) { setErr(e.message); }
  });
}
