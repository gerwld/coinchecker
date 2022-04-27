import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import {BiErrorCircle} from 'react-icons/bi'

import s from "./Login.module.css";
import { useSelector } from "react-redux";
const Login = (props) => {
  const {error, isError} = useSelector(({auth}) => ({
    error: auth.authErr,
    isError: auth.authErr !== null
  }))
  return (
    <div className={s.login_content}>
      <NavLink to="/" className={s.btn_back}><BsArrowLeft/>Back</NavLink>
      <div className={s.sect_overlay}>
        <h1 className={s.title}>Sign in to CoinChecker</h1>
        <div className={s.login_block}>
        {isError && <div className="error_block"><span><BiErrorCircle/>{error}</span></div>}
          <div className={s.overlay}>
            <LoginFormRedux onSubmit={props.loginAction} />
            
          </div>
          <div className={s.more_links}>
            <NavLink to="/register">Sign Up</NavLink>
            <NavLink to="forgot">Forgot password?</NavLink>
          </div>
        </div>
      </div> 
    </div>
  );
};

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.login_field}>
        <label>Login:</label>
        <Field
          name="log_login"
          component="input"
          type="text"
          autoComplete="email"
          placeholder="Enter your email"
          required={true}
        />
      </div>
      <div className={s.login_field}>
        <label>Password:</label>
        <Field
          name="log_password"
          component="input"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          required={true}
        />
      </div>
      <div className={s.login_buttons}>
        <button type="submit" className={s.btn_login}>
          Sign In
        </button>
      </div>
    </form>
  );
};

const LoginFormRedux = reduxForm({ form: "login" })(LoginForm);

export default Login;
