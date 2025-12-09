import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg6R6-SNGZUmJW6oMr-pt-oAc1H6aRbNE",
  authDomain: "erica-app-001.firebaseapp.com",
  projectId: "erica-app-001",
  storageBucket: "erica-app-001.firebasestorage.app",
  messagingSenderId: "963934937412",
  appId: "1:963934937412:web:3e2ef2447ead1a14837711"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
