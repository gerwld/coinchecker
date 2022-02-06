import React from 'react';
import { connect } from 'react-redux';
import { userAuth, authWithServer } from '../../redux/auth-reducer';
import Login from './Login';

class LoginContainer extends React.Component {
    loginAction = (e) => {
        this.props.userAuth(e);
   }

    render() {
        return(
            <Login loginAction={this.loginAction} authWithServer={this.props.authWithServer} />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {userAuth, authWithServer})(LoginContainer);