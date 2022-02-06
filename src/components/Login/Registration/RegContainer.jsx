import React from 'react';
import Register from './Registration';


class RegContainer extends React.Component {
    regSubmit(e) {
        e.preventDefault();
        alert('registration');
    }
    render() {
        return (
            <Register regSubmit={this.regSubmit} />
        )
    }
}

export default RegContainer;