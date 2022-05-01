import React from "react";
import { BiErrorCircle } from 'react-icons/bi';
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";

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
            <a href="https://www.youtube.com/watch?v=fSfsWFUmaX8" target="_blank">Forgot password?</a>
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
