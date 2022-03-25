import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyBPpd7CjFq2W_aPH21Xz_XKNxfUaRppUDU",
  authDomain: "hms-manit.firebaseapp.com",
  projectId: "hms-manit",
  storageBucket: "hms-manit.appspot.com",
  messagingSenderId: "1005037992997",
  appId: "1:1005037992997:web:f3b29daf6731a2825953cc",
  measurementId: "G-Q8YHTHEBB4"
});


export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;