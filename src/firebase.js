// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI6TYQ3ZYawor7WxjhTwKnDQKT8_Sj6gI",
  authDomain: "edutech-app-eecfd.firebaseapp.com",
  databaseURL: "https://edutech-app-eecfd-default-rtdb.firebaseio.com",
  projectId: "edutech-app-eecfd",
  storageBucket: "edutech-app-eecfd.appspot.com",
  messagingSenderId: "904449562777",
  appId: "1:904449562777:web:27e8ad9dd1a27d5054c008",
  measurementId: "G-7CCCTV9REH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


export { auth, db, storage }