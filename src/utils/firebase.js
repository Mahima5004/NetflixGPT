// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIDO_Wv-B_gSHogVnLz8QWkh_NqJgV5jo",
  authDomain: "netflixgpt-f56e2.firebaseapp.com",
  projectId: "netflixgpt-f56e2",
  storageBucket: "netflixgpt-f56e2.firebasestorage.app",
  messagingSenderId: "485655494879",
  appId: "1:485655494879:web:4573fbfdb6048dde53296a",
  measurementId: "G-Q1R1FGPZ4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();