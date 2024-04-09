// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore  } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASEAPIKEY,
  projectId: process.env.FIREBASEPROJECTID,
  authDomain: "moody-13597.firebaseapp.com",
  storageBucket: "moody-13597.appspot.com",
  messagingSenderId: "969808116822",
  appId: "1:969808116822:web:6c18fe0e40f8f0c27f8ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const analytics = app.name && typeof window !== 'undefined' ? getAnalytics(app) : null;