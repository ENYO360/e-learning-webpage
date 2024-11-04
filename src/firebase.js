import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyA4LhG5s8bntqgUyKNpjMdNrDmvMKu7cSM",
    authDomain: "e-learning-webpage.firebaseapp.com",
    projectId: "e-learning-webpage",
    storageBucket: "e-learning-webpage.firebasestorage.app",
    messagingSenderId: "1015263955254",
    appId: "1:1015263955254:web:22dbea41d817ba3ea20b97",
    measurementId: "G-BRGXBM3QSQ"
  };

  // initializing Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);