import React from 'react';
import Login from './Login';

class LoginContainer extends React.Component {
    loginAction = (e) => {
        e.preventDefault();
        alert('submit');
   }

    render() {
        return(
            <Login loginAction={this.loginAction} />
        )
    }
}

export default LoginContainer;