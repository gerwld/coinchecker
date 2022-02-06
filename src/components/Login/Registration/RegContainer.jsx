import React from 'react';
import { connect } from 'react-redux';
import { userRegister } from '../../../redux/auth-reducer';
import Register from './Registration';


class RegContainer extends React.Component {
    regSubmit = (e) => {
        this.props.userRegister(e);
    }
    
    render() {
        return (
            <Register regSubmit={this.regSubmit} />
        )
    }
}


export default connect(null, { userRegister })(RegContainer);
