// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDVhVoHTq9mc2yMhB6UyHsrFlZZkJinxlI",
  authDomain: "filmyapp-5b6f2.firebaseapp.com",
  projectId: "filmyapp-5b6f2",
  storageBucket: "filmyapp-5b6f2.appspot.com",
  messagingSenderId: "309520570581",
  appId: "1:309520570581:web:f2204f90ced0e2ca33ea5c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;