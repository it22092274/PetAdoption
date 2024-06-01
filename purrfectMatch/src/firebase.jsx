// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaG88-B60IyGiibBqjshMHl5utciQJ1Ig",
  authDomain: "adoptme-9eba2.firebaseapp.com",
  projectId: "adoptme-9eba2",
  storageBucket: "adoptme-9eba2.appspot.com",
  messagingSenderId: "719801570191",
  appId: "1:719801570191:web:c85f7d3c201a658bfe71fa",
  measurementId: "G-HK6KWZ1VP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app , auth, analytics,firebase }