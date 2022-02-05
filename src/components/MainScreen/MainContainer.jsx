import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

class MainContainer extends React.Component {


    render() {
        return (
            <Main props=""/>
        )
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(MainContainer);