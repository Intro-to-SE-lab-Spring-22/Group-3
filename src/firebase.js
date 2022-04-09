import firebase from 'firebase/compat/app';
//import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { unstable_createMuiStrictModeTheme } from '@material-ui/core';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLPSI7yXUHYXyQvQBmF1FeYKhCwgA008A",
  authDomain: "facebook-website-5f1ab.firebaseapp.com",
  databaseURL: "https://facebook-website-5f1ab-default-rtdb.firebaseio.com",
  projectId: "facebook-website-5f1ab",
  storageBucket: "facebook-website-5f1ab.appspot.com",
  messagingSenderId: "846413237294",
  appId: "1:846413237294:web:b4b66d3db6bd3cd771a3bf",
  measurementId: "G-K9HXQ6CNFJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//postsRef = collection(db, "posts");

const auth = getAuth();

export const database = getFirestore();

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export function useAuth() {
  const [ currentUser, setCurrentUser ] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;

}

export { db, getFirestore, collection, getDocs };