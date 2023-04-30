// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_mYINXZOKrLxTEP5Oe4FkWyv8yuTXadI",
  authDomain: "helpermath-97ee8.firebaseapp.com",
  projectId: "helpermath-97ee8",
  storageBucket: "helpermath-97ee8.appspot.com",
  messagingSenderId: "66565979303",
  appId: "1:66565979303:web:95b60a0124d3b7320aaf82",
  measurementId: "G-4P75QGMPD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);