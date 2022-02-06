import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { RiGithubFill } from 'react-icons/ri';

const Login = (props) => {
    return (
        <div className={s.login_content}>
            <div className={s.login_block}>
                <h1>Login</h1>
                <LoginFormRedux onSubmit={props.loginAction} authGit={props.authGit} />

                <div className={s.more_links}>
                    <NavLink to='/register'>Sign Up</NavLink>
                    <NavLink to='forgot'>Forgot password?</NavLink>
                </div>
            </div>
        </div>
    )
}

const LoginForm = ({ handleSubmit, authGit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.login_field}>
                <label>Login:</label>
                <Field
                    name="log_login"
                    component="input"
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className={s.login_field}>
                <label>Password:</label>
                <Field
                    name="log_password"
                    component="input"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>
            <div className={s.login_buttons}>
            <button type="submit" className={s.btn_login}>Log In</button>
            <button onClick={authGit} type="button" className={s.btn_github} alt="Login via GitHub"><RiGithubFill /></button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

export default Login;