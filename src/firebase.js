
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCCrr1gXi2rLGjK3_UwKPZC-YOg3j4UtlU",
  authDomain: "hack-club-kmea-57563.firebaseapp.com",
  projectId: "hack-club-kmea-57563",
  storageBucket: "hack-club-kmea-57563.appspot.com",
  messagingSenderId: "858830713717",
  appId: "1:858830713717:web:6a1307d3e48a90e0d7993c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);