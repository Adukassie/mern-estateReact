// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estatereact.firebaseapp.com",
  projectId: "mern-estatereact",
  storageBucket: "mern-estatereact.appspot.com",
  messagingSenderId: "222063118704",
  appId: "1:222063118704:web:1470c389a19bbe651d27b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
