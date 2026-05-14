import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getAuth }       from 'firebase/auth';

// Config is loaded from .env.local (gitignored).
// For GitHub Actions deployment, add these as repository secrets.
// See .env.example for the required variable names.
const firebaseConfig = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

const IS_CONFIGURED = !!firebaseConfig.apiKey;

let _db   = null;
let _auth = null;

export function initFirebase() {
  if (!IS_CONFIGURED) return false;
  try {
    const app = initializeApp(firebaseConfig);
    _db   = getFirestore(app);
    _auth = getAuth(app);
    return true;
  } catch (e) {
    console.warn('Firebase init failed — running in guest mode', e);
    return false;
  }
}

export const isFirebaseConfigured = () => IS_CONFIGURED;
export const getDb               = () => _db;
export const getAuthInstance     = () => _auth;
