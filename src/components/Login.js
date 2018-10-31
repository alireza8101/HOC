import React from "react";
import { connect } from "react-redux";
import { userLogin } from "../reducers/authReducer";
import hoc from "../lib/firebaseAuth.jsx";
const Login = props => {
  const onclick = data => {
    console.log(data.displayName);
  };

  return (
    <div>
      {!props.user ? <Btnhoc onSuccess={onclick}>Google </Btnhoc> : <h1> </h1>}
      <hr />
      <button onClick={props.signInWithGoogle}>ggggoole</button>
    </div>
  );
};
class Btn extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.signInWithGoogle}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

const Btnhoc = hoc(Btn);
const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

const mapDispatchToProps = dispatch => ({
  userLogin: user => {
    dispatch(userLogin(user));
  }
});
export default hoc(Login);
