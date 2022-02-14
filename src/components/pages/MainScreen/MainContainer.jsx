import React from 'react';
import { connect } from 'react-redux';
import { userLogOut } from '../../../redux/auth-reducer';
import Main from './Main';

const MainContainer = ({ headTrends, isAuth, userLogOut }) => {

    const logOutMain = () => {

        userLogOut();
    }


    return <Main headTrends={headTrends} isAuth={isAuth} logOut={logOutMain} />;
};

let mapStateToProps = (state) => {
    return {
        headTrends: state.app.headTrends,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { userLogOut })(MainContainer);