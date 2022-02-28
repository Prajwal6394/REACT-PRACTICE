import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyCnGJuW2siv_33ob6LzXNe0x9g4T34gKKY",
    authDomain: "fetch-data214.firebaseapp.com",
    projectId: "fetch-data214",
    storageBucket: "fetch-data214.appspot.com",
    messagingSenderId: "968478189971",
    appId: "1:968478189971:web:d1e712a76aff2063656066",
    measurementId: "G-DD0XYWDL60"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;