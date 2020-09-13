import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAYAkfMTpRXvia2BkAE21AjeXbrulkSEXA",
    authDomain: "clone-d8c93.firebaseapp.com",
    databaseURL: "https://clone-d8c93.firebaseio.com",
    projectId: "clone-d8c93",
    storageBucket: "clone-d8c93.appspot.com",
    messagingSenderId: "764873530526",
    appId: "1:764873530526:web:f03e11fed49ccadebeaf8f",
    measurementId: "G-37QG5SNZTN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };