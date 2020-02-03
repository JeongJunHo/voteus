import React, { useContext, Fragment } from 'react';

import UserVoteList from '../components/main/UserVoteList';

import VoteListContext from '../context/VoteListContext';

const UserVoteBody = props => {
    const votelist = useContext(VoteListContext);

    return (
        <Fragment>
            <h1>VoteBody</h1>
            {votelist}
            <UserVoteList />
        </Fragment>
    )
}

export default UserVoteBody;