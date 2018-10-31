import React from 'react'
import { connect } from "react-redux";
import {auth} from '../../Reducers'
import {authUser} from '../../Reducers/authReducer'
import {withFirebase} from '../../Firebase'

const SignIn =(props)=>{ 

  return(
    <div>
    <p> SignIn Component</p>
    <button onClick={props.signInWithGoogle} >Sign In</button>
    <button onClick={props.signOut} >Sign Out</button>

    </div>
  )
}



export default ((withFirebase)(SignIn));