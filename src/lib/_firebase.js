import firebase, { auth, provider } from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA8UZMBCx79X_2jPv9UebiGFzkLHCewIYQ",
  authDomain: "oshop-885.firebaseapp.com",
  databaseURL: "https://oshop-885.firebaseio.com",
  projectId: "oshop-885",
  storageBucket: "oshop-885.appspot.com",
  messagingSenderId: "873415807995"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else firebase.app();

// export const authProvider = new firebase.auth.GoogleAuthProvider();
// export const gAuth = new firebase.auth();
export default firebase;
