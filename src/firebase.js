// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAzNZ7ZZWxgXokYVA17dzSp23yFgZ-XofQ",
    authDomain: "mitra-b3bb2.firebaseapp.com",
    projectId: "mitra-b3bb2",
    storageBucket: "mitra-b3bb2.appspot.com",
    messagingSenderId: "412846445840",
    appId: "1:412846445840:web:2e6f44591ccb00d1274195",
    measurementId: "G-XKGHTM1NQ7"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
