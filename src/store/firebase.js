import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDS_B3ZEQ_gttxzWCe3rgoysepFF6S0NBw",
  authDomain: "portfolio-b87b5.firebaseapp.com",
  projectId: "portfolio-b87b5",
  storageBucket: "portfolio-b87b5.appspot.com",
  messagingSenderId: "155543885196",
  appId: "1:155543885196:web:1a667fd8bf40e21e7bb2a9",
  measurementId: "G-5CY0TDCX77",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
