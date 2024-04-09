import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAqlzoKl0ayhDeBAF6T9upujjyp2d09PlM",
  projectId: "moody-13597",
  authDomain: "moody-13597.firebaseapp.com",
  storageBucket: "moody-13597.appspot.com",
  messagingSenderId: "969808116822",
  appId: "1:969808116822:web:6c18fe0e40f8f0c27f8ff7"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const analytics = app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
export {
  analytics as a,
  db as d
};
