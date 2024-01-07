import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBceS-KtMay1Jum7O2mx9gL7Pw4CUEnof4",
  authDomain: "ios-e-commerce.firebaseapp.com",
  projectId: "ios-e-commerce",
  storageBucket: "ios-e-commerce.appspot.com",
  messagingSenderId: "1091268240389",
  appId: "1:1091268240389:web:c9d76421b9af3dcb63a86c",
  rules_version: "2",
};

// const auth = getAuth(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
