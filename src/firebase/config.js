// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH-96F8F9x6Vwv4-FvT0x-2gDGq7R3YmU",
  authDomain: "miniblog-145ad.firebaseapp.com",
  projectId: "miniblog-145ad",
  storageBucket: "miniblog-145ad.appspot.com",
  messagingSenderId: "685079724140",
  appId: "1:685079724140:web:9ef1826f97b0e73d6ed849",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
