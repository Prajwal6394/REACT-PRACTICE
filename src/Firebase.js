import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8DiVt_p4--LxIMMfKen-xslVfVm7VHiY",
    authDomain: "datafetch-72.firebaseapp.com",
    projectId: "datafetch-72",
    storageBucket: "datafetch-72.appspot.com",
    messagingSenderId: "415649183432",
    appId: "1:415649183432:web:06906a5ea135db028a97fd",
    measurementId: "G-SPNXZP4P9C"
  };

var db = firebase.initializeApp(firebaseConfig);
export default db;