import React, { Component, Fragment } from 'react';
import Header from './Header';
import VoteTab from './VoteTab';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <VoteTab />
            </Fragment>
        );
    }
}

export default Layout;