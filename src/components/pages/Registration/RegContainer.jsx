import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { userRegister } from '../../../redux/reducers/auth-reducer';
import Register from './Registration';
import withRouter from '../../../hoc/withRouter';



class RegContainer extends React.Component {
    userRegister = (e) => {
        this.props.userRegister(e);
    }

    render() {
        return (
            <Register regSubmit={this.userRegister} regStatus={this.props.router.params.status === 'success'} regSuccess={this.props.regSuccess} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        regSuccess: state.auth.regSuccess
    }
}


export default compose(
    connect(mapStateToProps, { userRegister }),
    withRouter
)(RegContainer);