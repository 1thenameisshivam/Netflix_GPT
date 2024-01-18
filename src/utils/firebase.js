// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMZnnbeOPB0zymgadwbZ99StzcgvGHmTc",
  authDomain: "netflixgpt-4ca35.firebaseapp.com",
  projectId: "netflixgpt-4ca35",
  storageBucket: "netflixgpt-4ca35.appspot.com",
  messagingSenderId: "171960456860",
  appId: "1:171960456860:web:3cc3523906e0b948083f59",
  measurementId: "G-4YJN5RHW8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();