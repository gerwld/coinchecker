import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

class MainContainer extends React.Component {


    render() {
        return (
            <Main headTrends={this.props.headTrends}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        headTrends: state.app.headTrends
    }
}

export default connect(mapStateToProps, {})(MainContainer);