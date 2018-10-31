import React from "react";
// import firebase from "./firebase";
import firebase from "firebase";

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
//*****
const hoc = BaseComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.authProvider = new firebase.auth.GoogleAuthProvider();
      this.gAuth = new firebase.auth();
      firebase.auth().useDeviceLanguage();
    }
    signInWithGoogle() {
      this.gAuth
        .signInWithPopup(this.authProvider)
        .then(result => {
          this.props.onSuccess(result);
        })
        .catch(error => console.log(error.message));
    }

    render() {
      return (
        <BaseComponent
          {...this.props}
          signInWithGoogle={this.signInWithGoogle.bind(this)}
        />
      );
    }
  }
  return HOC;
};
export default hoc;
