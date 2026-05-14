import { initializeApp } from 'firebase/app';
import { getFirestore }  from 'firebase/firestore';
import { getAuth }       from 'firebase/auth';

// ─────────────────────────────────────────────────────────────────────────────
// SETUP — replace every "REPLACE_WITH_…" value with your own Firebase config.
//
// Steps:
//   1. Go to console.firebase.google.com
//   2. Create a project (or open an existing one)
//   3. Project Settings → Your apps → Add web app → copy firebaseConfig here
//   4. Authentication → Sign-in method → enable Google + Email/Password
//   5. Firestore Database → Create database (Production mode)
//   6. Firestore → Rules → paste the rules from the README
// ─────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyA28a35tBo-4TZM7ZVsZei095U_EnHRtrc",
  authDomain: "trippy-planner-807df.firebaseapp.com",
  projectId: "trippy-planner-807df",
  storageBucket: "trippy-planner-807df.firebasestorage.app",
  messagingSenderId: "376063703433",
  appId: "1:376063703433:web:a1fe668b8733d05ac74958",
  measurementId: "G-X6XC5GQMDJ"
};

const IS_CONFIGURED = !firebaseConfig.apiKey.startsWith('REPLACE_');

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
