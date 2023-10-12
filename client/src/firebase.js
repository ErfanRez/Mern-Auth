// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-3295f.firebaseapp.com",
  projectId: "mern-auth-3295f",
  storageBucket: "mern-auth-3295f.appspot.com",
  messagingSenderId: "55273636385",
  appId: "1:55273636385:web:4a23ed7c61bc8549e75960",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
