import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBUHBpaMux8yRIKJRR8TAog8daI30mbPhY",
    authDomain: "ecommerce-19f2f.firebaseapp.com",
    databaseURL: "https://ecommerce-19f2f.firebaseio.com",
    projectId: "ecommerce-19f2f",
    storageBucket: "ecommerce-19f2f.appspot.com",
    messagingSenderId: "897488097425",
    appId: "1:897488097425:web:043da4a345c30b66742f30"
  };

  const fb = firebase.initializeApp(firebaseConfig);
 export default fb;