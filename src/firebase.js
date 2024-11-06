import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4LhG5s8bntqgUyKNpjMdNrDmvMKu7cSM",
    authDomain: "e-learning-webpage-by-enyo.web.app",
    projectId: "e-learning-webpage",
    storageBucket: "e-learning-webpage.firebasestorage.app",
    messagingSenderId: "1015263955254",
    appId: "1:1015263955254:web:22dbea41d817ba3ea20b97",
    measurementId: "G-BRGXBM3QSQ"
  };

  // initializing Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const db = getFirestore(app);
  export const auth = getAuth(app);