// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Stuff
const firebaseConfig = {
  apiKey: "AIzaSyBs5ohFQ2veZgcrNCUJn60JqzEcuQE2lAw",
  authDomain: "slugevents-57e0b.firebaseapp.com",
  projectId: "slugevents-57e0b",
  storageBucket: "slugevents-57e0b.appspot.com",
  messagingSenderId: "819769300151",
  appId: "1:819769300151:web:7bf1ddc0b5bcea5fbb2932",
  measurementId: "G-RD630CEKKR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
