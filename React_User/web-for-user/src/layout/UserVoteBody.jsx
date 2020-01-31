import React, { Fragment } from 'react';

import UserVoteList from '../components/main/UserVoteList';

import VoteListContext from '../context/VoteListContext';

const UserVoteBody = props => {

    return (
        <Fragment>
            <h1>VoteBody</h1>
            <UserVoteList />
        </Fragment>
    )
}

export default UserVoteBody;