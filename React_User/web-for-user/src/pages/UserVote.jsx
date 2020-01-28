import React, { Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserVoteBody from '../layout/UserVoteBody';
import UserFooter from '../layout/UserFooter';

const UserVote = props => {
    return (
        <Fragment>
            <UserHeader>
                <h1>투표 페이지(header)</h1>
            </UserHeader>
            <UserVoteBody />
            <UserFooter />
        </Fragment>
    )
}

export default UserVote;