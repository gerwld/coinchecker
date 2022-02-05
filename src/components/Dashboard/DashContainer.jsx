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
            <Dashboard name={this.props.name} last={this.props.last_added} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        name: state.dashboard.name,
        last_added: state.dashboard.last_added
    }
}

export default connect(mapStateToProps, {getCoinOutput})(DashContainer);