import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import VoteTab from './VoteTab';

const Layout = props => {
    return (
        <Fragment>
            <Header />
            <VoteTab />
            Layout
            <Footer />
        </Fragment>
    );
}

export default Layout;