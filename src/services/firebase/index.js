import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCfiTStt9WP64ciSG6zFwXaB-AQFj8TgmU",
  authDomain: "backend31865-8fd5a.firebaseapp.com",
  projectId: "backend31865-8fd5a",
  storageBucket: "backend31865-8fd5a.appspot.com",
  messagingSenderId: "1063469139998",
  appId: "1:1063469139998:web:f267805b0b714a25df860f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)