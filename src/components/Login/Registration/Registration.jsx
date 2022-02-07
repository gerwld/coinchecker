import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from '../Login.module.css';
import { NavLink } from 'react-router-dom';

const Register = ({ regSubmit, regStatus }) => {

    if (regStatus) {
        return (
            <div className={s.login_content}>
                <div className={s.register_block}>
                    <div className={s.reg_success}>
                        <span className={s.reg_title}>Registration succeed.</span>
                        <NavLink className={s.btn_login} to="/login">Log In</NavLink></div>
                    </div>
            </div>)
    } else {
        return (
            <div className={s.login_content}>
                <div className={s.register_block}>
                    <h1>Registration</h1>
                    <RegisterFormRedux onSubmit={regSubmit} />
                </div>
            </div>
        )
    }
}

const RegisterForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.login_field}>
                <label>Login:</label>
                <Field
                    name="login"
                    component="input"
                    type="text"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="off"
                    placeholder="Login"
                />
            </div>
            <div className={s.login_field}>
                <label>Email:</label>
                <Field
                    name="email"
                    component="input"
                    type="email"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="off"
                    placeholder="john.smith@yahoo.com"
                />
            </div>
            <div className={s.login_field}>
                <label>Password:</label>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="off"
                    placeholder="Password"
                />
            </div>
            <div className={s.login_buttons}>
                <button type="submit" className={s.btn_login}>Sign Up</button>
            </div>
        </form>
    )
}

const RegisterFormRedux = reduxForm({ form: 'registration' })(RegisterForm);

export default Register;