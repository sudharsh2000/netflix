// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYfZY_FCI18DF4cazp8NSsMkhsWtAKUE0",
  authDomain: "netflix-373e0.firebaseapp.com",
  projectId: "netflix-373e0",
  storageBucket: "netflix-373e0.firebasestorage.app",
  messagingSenderId: "87745438648",
  appId: "1:87745438648:web:6b0b495e40a5113107254d",
  measurementId: "G-2NB9MZW1EB"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const auth=getAuth(firebaseapp)
const database=getFirestore(firebaseapp)
export {database,firebaseapp,auth}