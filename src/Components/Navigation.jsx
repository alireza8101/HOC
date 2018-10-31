import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

const Navigation = (props) =>

( 
 <div>
     
      <Link to="/">Home</Link>
      <span> </span>
      <Link to="/dashboard">Dashboard</Link>
      <span> </span>
      <Link to="/signin">SignIn</Link>
     
  </div>  
)
  

const mapStateToProps=({authState}) =>({
  user:authState.user
})
export default connect(mapStateToProps)(Navigation);
 