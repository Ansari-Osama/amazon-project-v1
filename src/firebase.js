// eslint-disable-next-line no-unused-vars
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVSZB-xXvvzsQzcoKaaLUf1T57DpAGWYc",
    authDomain: "clone-a57ec.firebaseapp.com",
    projectId: "clone-a57ec",
    storageBucket: "clone-a57ec.appspot.com",
    messagingSenderId: "695879714498",
    appId: "1:695879714498:web:e8b0b7742a705fea6bdd5b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};