// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUbUY7kDbhhCqljjBYpFjx7JZ1_NjmKGo",
  authDomain: "netflix-clone-4d.firebaseapp.com",
  projectId: "netflix-clone-4d",
  storageBucket: "netflix-clone-4d.appspot.com",
  messagingSenderId: "379754232627",
  appId: "1:379754232627:web:09dc533f49722902385c46",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
