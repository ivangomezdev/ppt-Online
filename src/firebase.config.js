// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD04Q_li0PI_iYkz2rEEvkZ_CbB_QqltFQ",
  authDomain: "ppt-online-f631a.firebaseapp.com",
  projectId: "ppt-online-f631a",
  storageBucket: "ppt-online-f631a.firebasestorage.app",
  messagingSenderId: "997870272203",
  appId: "1:997870272203:web:74cd845bb37f507749a54e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
