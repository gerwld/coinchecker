import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';
import LoginGithub from 'react-login-github';

const Login = (props) => {
    return (
        <div className={s.login_content}>
            <div className={s.login_block}>
                <h1>Login</h1>
                <LoginFormRedux onSubmit={props.loginAction} />

                <LoginGithub clientId="826daa3627e56e610860"
                    onSuccess={props.sendGitCodeToServ}
                    onFailure={() => alert('Some error occured.Please, try another method.')} />

                <div className={s.more_links}>
                    <NavLink to='/register'>Sign Up</NavLink>
                    <NavLink to='forgot'>Forgot password?</NavLink>
                </div>
            </div>
        </div>
    )
}

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
                    required="true"
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
                    required="true"
                />
            </div>
            <div className={s.login_buttons}>
                <button type="submit" className={s.btn_login}>Log In</button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

export default Login;