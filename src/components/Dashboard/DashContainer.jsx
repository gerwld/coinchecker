import React from 'react';
import { connect } from 'react-redux';
import { getCoinOutput } from '../../redux/dashboard-reducer';
import Dashboard from './Dashboard';

class DashContainer extends React.Component {
    componentDidMount() {
        this.props.getCoinOutput();
    }

    render() {
        return (
            <Dashboard last={this.props.last_added} userData={this.props.userData} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        userData: state.auth.authUser,
        last_added: state.dashboard.last_added
    }
}

export default connect(mapStateToProps, {getCoinOutput})(DashContainer);