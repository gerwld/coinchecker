import React from "react";
import { connect } from "react-redux";
import { userAuth } from "../../../redux/reducers/auth-reducer";
import Login from "./Login";

export function LoginContainer({ userAuth }) {

  return (
    <Login loginAction={userAuth}  />
  );

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { userAuth })(LoginContainer);