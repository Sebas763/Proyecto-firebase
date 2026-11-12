// ==========================================================================
// PASO 1 · Conexión con Firebase
// Instala el SDK con npm install firebase, descomenta el bloque y completa
// firebaseConfig con los valores de tu proyecto.
// ==========================================================================

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAXoMfwEvIkTb1hvwBl6VvG8lXWjKQr_AU",
  authDomain: "proyecto-firebase-f3395.firebaseapp.com",
  projectId: "proyecto-firebase-f3395",
  storageBucket: "proyecto-firebase-f3395.firebasestorage.app",
  messagingSenderId: "722189620786",
  appId: "1:722189620786:web:9fdc27ec96e83955b14e2b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

