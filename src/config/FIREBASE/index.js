import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
  apiKey: "AIzaSyCk-n-TPj3wTOeZ4hlWNvW8AOtQDdTTXOU",
  authDomain: "noteapp-36814.firebaseapp.com",
  projectId: "noteapp-36814",
  storageBucket: "noteapp-36814.appspot.com",
  messagingSenderId: "144680245099",
  appId: "1:144680245099:web:3e98f4d05359a8ca365e2e"
});

const FIREBASE = firebase;

export default FIREBASE;
