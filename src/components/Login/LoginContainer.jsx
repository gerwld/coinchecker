import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userAuth, sendGitCodeToServ } from '../../redux/auth-reducer';
import Login from './Login';
import { Navigate } from 'react-router';

class LoginContainer extends React.Component {
    loginAction = (e) => {
        this.props.userAuth(e);
   }

    render() {
        if(this.props.isAuth === true) return <Navigate to="/dashboard" replace={true}/>
        else return(
            <Login loginAction={this.loginAction} sendGitCodeToServ={this.props.sendGitCodeToServ} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {userAuth, sendGitCodeToServ}),
    )(LoginContainer);