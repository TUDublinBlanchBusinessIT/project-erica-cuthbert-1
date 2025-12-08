import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "project-19d8d.firebaseapp.com",
  projectId: "project-19d8d",
  storageBucket: "project-19d8d.appspot.com",
  messagingSenderId: "1234",
  appId: "1:1234:web:abcd",
};



const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const handleSignIn = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      console.log("Logged in!", userCredential.user.email);
      // navigate to booking page next
      // navigation.navigate("StartScreen");
    })
    .catch(error => {
      alert(error.message);
    });
};

