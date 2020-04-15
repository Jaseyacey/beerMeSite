import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyBU6ehajbiA6lghArhGyPUveJ78pAHth88",
  authDomain: "beer-me-65c40.firebaseapp.com",
  databaseURL: "https://beer-me-65c40.firebaseio.com",
  projectId: "beer-me-65c40",
  storageBucket: "beer-me-65c40.appspot.com",
  messagingSenderId: "990268986127",
  appId: "1:990268986127:web:013570f8b9a035b880a47a",
  measurementId: "G-0WJ2QPMC1P"
  };

  firebase.initializeApp(config);
  
  export default firebase;