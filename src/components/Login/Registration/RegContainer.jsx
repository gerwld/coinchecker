import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRouter from '../../../hoc/DropDown/withRouter';
import { userRegister } from '../../../redux/auth-reducer';
import Register from './Registration';


class RegContainer extends React.Component {
    regSubmit = (e) => {
        this.props.userRegister(e);
    }
    
    render() {
        return (
            <Register regSubmit={this.regSubmit} regStatus={this.props.router.params.status === 'success'} />
        )
    }
}


export default compose(
    connect(null, { userRegister }),
    withRouter
)(RegContainer);