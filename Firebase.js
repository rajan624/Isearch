// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification,
    sendPasswordResetEmail,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import {
  getFirestore,
  collection, 
  addDoc,
  doc,
  setDoc,
  query, 
  where,
  getDocs,
  onSnapshot,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // add ur project configuration,
  apiKey: "**********************",
  authDomain: "***********************",
  projectId: "******************",
  storageBucket: "******************",
  messagingSenderId: "***************",
  appId: "***************************",
  measurementId: "******************"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {app,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,
    signOut,sendEmailVerification,sendPasswordResetEmail,onAuthStateChanged,getFirestore, collection, 
    addDoc,db,setDoc,doc,query, where,getDocs,onSnapshot, updateDoc,deleteDoc };
