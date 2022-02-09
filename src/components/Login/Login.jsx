import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";
import { NavLink } from "react-router-dom";
import LoginGithub from "react-login-github";
import { HeaderSection } from "../MainScreen/Header/Header";

const Login = (props) => {
  return (
    <div className={s.login_content}>
      <div className={s.sect_overlay}>
        <h1 className={s.title}>Sign in to CoinChecker</h1>
        <div className={s.login_block}>
          <div className={s.overlay}>
            <LoginFormRedux onSubmit={props.loginAction} />
            <LoginGithub className={s.btn_github} clientId="826daa3627e56e610860" onSuccess={props.sendGitCodeToServ} onFailure={() => alert("Some error occured.Please, try another method.")} />
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
        <Field name="log_login" component="input" type="text" autoComplete="email" placeholder="Enter your email" required={true} />
      </div>
      <div className={s.login_field}>
        <label>Password:</label>
        <Field name="log_password" component="input" type="password" autoComplete="current-password" placeholder="Enter your password" required={true} />
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
