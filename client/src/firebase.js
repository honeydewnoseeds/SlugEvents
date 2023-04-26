// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyIqKQ6ckyjHWqYYQkab7xa51mlkqvN_o",
  authDomain: "cse115a-8401d.firebaseapp.com",
  projectId: "cse115a-8401d",
  storageBucket: "cse115a-8401d.appspot.com",
  messagingSenderId: "986667314698",
  appId: "1:986667314698:web:094bd2e82b4f7d884b79f3",
  measurementId: "G-04CX5L5V9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);