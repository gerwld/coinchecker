import React from "react";
import { connect } from "react-redux";
import { sendGitCodeToServ, userAuth } from "../../../redux/auth-reducer";
import Login from "./Login";

export function LoginContainer({ userAuth, sendGitCodeToServ }) {

  return (
    <Login loginAction={userAuth} sendGitCodeToServ={sendGitCodeToServ} />
  );

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { userAuth, sendGitCodeToServ })(LoginContainer);