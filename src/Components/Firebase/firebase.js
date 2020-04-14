import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDKNXVX4adF_zIpEV3sm-ZowNLeFKqnKLI",
    authDomain: "slackclone-5f7d8.firebaseapp.com",
    databaseURL: "https://slackclone-5f7d8.firebaseio.com",
    projectId: "slackclone-5f7d8",
    storageBucket: "slackclone-5f7d8.appspot.com",
    messagingSenderId: "314131041474",
    appId: "1:314131041474:web:0ca4eac4d93e82befeff5b"
  };

  firebase.initializeApp(config);
  
  export default firebase;