import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

const MainContainer = ({ headTrends }) => {
    return <Main headTrends={headTrends} />;
};

let mapStateToProps = (state) => {
    return {
        headTrends: state.app.headTrends
    }
}

export default connect(mapStateToProps, {})(MainContainer);