import React, { Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserAuthBody from '../layout/UserAuthBody';
import UserFooter from '../layout/UserFooter';

const UserAuthentication = props => {
    return (
        <Fragment>
            <UserHeader>
                <h1>인증 페이지(header)</h1>
            </UserHeader>
            <UserAuthBody />
            <UserFooter />
        </Fragment>
    )
}

export default UserAuthentication;