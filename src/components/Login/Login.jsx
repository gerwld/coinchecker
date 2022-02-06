import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './Login.module.css';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    return (
        <div className={s.login_content}>
            <div className={s.login_block}>
                <LoginFormRedux handleSubmit={props.loginAction} />

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
            <button type="submit" className={s.btn_login}>Log In</button>
        </form>
    )
}

const LoginFormRedux = reduxForm({ form: 'login' })(LoginForm);

export default Login;