import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCg6R6-SNGZUmJW6oMr-pt-oAc1H6aRbNE",
  authDomain: "erica-app-001.firebaseapp.com",
  projectId: "erica-app-001",
  storageBucket: "erica-app-001.appspot.com",
  messagingSenderId: "963394937412",
  appId: "1:963394937412:web:3e2ef2447ead1a14837711"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.firestore();
