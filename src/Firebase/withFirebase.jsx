import React from "react";
import {firebase,auth} from "./firebase";

// Initialize Firebase

//*****
export const withFirebase = BaseComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.authProvider = new firebase.auth.GoogleAuthProvider();
      this.auth = new firebase.auth();
      firebase.auth().useDeviceLanguage();
    }
    signInWithGoogle() {
      this.auth
        .signInWithPopup(this.authProvider)
        .then(result => {
           this.user=()=>{return result};
        })
        .catch(error => console.log(error.message));
    }
    signOut() {
      this.auth.signOut();

    }

    render() {
      return (
        <BaseComponent
          {...this.props}
          signInWithGoogle={this.signInWithGoogle.bind(this)}
          signOut={this.signOut.bind(this)}
          user={this.user}
          
        />
      );
    }
  }
  return HOC;
};
 