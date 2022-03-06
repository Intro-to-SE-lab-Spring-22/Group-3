import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLPSI7yXUHYXyQvQBmF1FeYKhCwgA008A",
    authDomain: "facebook-website-5f1ab.firebaseapp.com",
    projectId: "facebook-website-5f1ab",
    storageBucket: "facebook-website-5f1ab.appspot.com",
    messagingSenderId: "846413237294",
    appId: "1:846413237294:web:b4b66d3db6bd3cd771a3bf",
    measurementId: "G-K9HXQ6CNFJ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;