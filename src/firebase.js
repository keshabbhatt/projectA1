import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3WApB3UKBKpnn7j4-AwNKWWSM0CRD_4Q",
  authDomain: "portfolio-cd21c.firebaseapp.com",
  databaseURL: "https://portfolio-cd21c-default-rtdb.firebaseio.com",
  projectId: "portfolio-cd21c",
  storageBucket: "portfolio-cd21c.firebasestorage.app",
  messagingSenderId: "653200823552",
  appId: "1:653200823552:web:9f207959d6a7a6aa050fe5",
  measurementId: "G-F0YJ9EWNX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };