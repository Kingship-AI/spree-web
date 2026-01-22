// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmhpZy-X6yNPvX3_iTjcbH1MSOgk0uP-M",
  authDomain: "spree-ac59b.firebaseapp.com",
  projectId: "spree-ac59b",
  storageBucket: "spree-ac59b.firebasestorage.app",
  messagingSenderId: "1737280490",
  appId: "1:1737280490:web:36bb749e81623a2d1a8093",
  measurementId: "G-B4QQMV2LZ6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
