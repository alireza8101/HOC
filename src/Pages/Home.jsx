import React from "react";
import { connect } from "react-redux";
import {authState} from '../Reducers'
import {authUser} from '../Reducers/authReducer'
import {withFirebase,auth} from '../Firebase'

import SignIn from  '../Components/Auth/SignIn'

const Home =(props)=>{ 
   return(
    <div>
    <p> Home page</p>{props.user.displayName}
    <SignIn user={(user)=> props.authUser(user)} />
    <button onClick={()=>{console.log(props.user.displayName)}}>Out</button>
    </div>
  )
}
 

const mapStateToProps=({authState}) =>({
  user:authState.user
})

const mapDispatchToProps  = dispatch => ({
  authUser: user => {
    dispatch(authUser(user));
  }
});
export default connect(mapStateToProps,mapDispatchToProps )(Home);