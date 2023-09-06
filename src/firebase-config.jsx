// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMR44u7nWWzavEcYiCGcyX_IA-M6t3FUg",
  authDomain: "admin-dashboard-2ac24.firebaseapp.com",
  projectId: "admin-dashboard-2ac24",
  storageBucket: "admin-dashboard-2ac24.appspot.com",
  messagingSenderId: "938146349118",
  appId: "1:938146349118:web:200947efdd58481a15916f",
  measurementId: "G-R2QFVJ9WD4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);