import React from "react";
import { connect } from "react-redux";

import "./style.css";
import Router from "./Router";
import { firebase } from "./Firebase";
import { authUser } from "./Reducers/authReducer";

// const App =()=>

//      (
//       <div>
//         <Router />
//       </div>
//     );

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(result => {
      result ? this.props.sauthUser(result) : this.props.sauthUser("null");
    });
  }
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}
const mapStateToProps = ({ authState }) => ({
  user: authState.user
});

const mapDispatchToProps = dispatch => ({
  sauthUser: user => {
    dispatch(authUser(user));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
