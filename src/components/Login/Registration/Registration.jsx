import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from '../Login.module.css';

const Register = (props) => {
    return (
        <div className={s.login_content}>
            <div className={s.register_block}>
                <h1>Registration</h1>
                <RegisterFormRedux handleSubmit={props.regSubmit} />
            </div>
        </div>
    )
}

const RegisterForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
             <div className={s.login_field}>
                <label>Login:</label>
                    <Field
                        name="log_login"
                        component="input"
                        type="text"
                        autoComplete="username"
                        placeholder="Login"
                    />
            </div>
            <div className={s.login_field}>
                <label>Email:</label>
                    <Field
                        name="log_email"
                        component="input"
                        type="email"
                        autoComplete="email"
                        placeholder="john.smith@yahoo.com"
                    />
            </div>
            <div className={s.login_field}>
                <label>Password:</label>
                    <Field
                        name="log_password"
                        component="input"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Password"
                    />
            </div>
            <div className={s.login_field}>
                <label>Repeat password:</label>
                    <Field
                        name="log_password2"
                        component="input"
                        type="password"
                        autoComplete="new-password"
                        placeholder="Password"
                    />
            </div>
            <button type="submit" className={s.btn_login}>Sign Up</button>
        </form>
    )
}

const RegisterFormRedux = reduxForm({ form: 'registration' })(RegisterForm);

export default Register;