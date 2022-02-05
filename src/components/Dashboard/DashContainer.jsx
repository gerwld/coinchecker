import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';

class DashContainer extends React.Component {
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

export default connect(mapStateToProps, {})(DashContainer);