/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWhsnz6c8KhN4mJ8yPKBs-tWsHpZgA48",
  authDomain: "burgerin-app.firebaseapp.com",
  projectId: "burgerin-app",
  storageBucket: "burgerin-app.appspot.com",
  messagingSenderId: "1074721562098",
  appId: "1:1074721562098:web:c311d1480f1d1f065bdf6b",
  measurementId: "G-WW4GSBDYT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
