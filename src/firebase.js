import * as firebase from "firebase";


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDliGeYyT8v2yq_8_tGamt1X8l38GOfSSU",
    authDomain: "diary-test-f2661.firebaseapp.com",
    projectId: "diary-test-f2661",
    storageBucket: "diary-test-f2661.appspot.com",
    messagingSenderId: "536241002630",
    appId: "1:536241002630:web:07d1de05b48540c2d01907"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database().ref('/notes');