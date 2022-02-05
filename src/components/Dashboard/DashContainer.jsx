import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/dashboard-reducer';
import Dashboard from './Dashboard';

class DashContainer extends React.Component {
    componentDidMount() {
        this.props.getUserInfo();
        // alert('component did mount');
    }

    render() {
        return (
            <Dashboard name={this.props.name} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        name: state.dashboard.name
    }
}

export default connect(mapStateToProps, {getUserInfo})(DashContainer);