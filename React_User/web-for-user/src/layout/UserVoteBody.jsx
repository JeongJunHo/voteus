import React from 'react';

import UserVoteList from '../components/main/UserVoteList';

import VoteListContext from '../context/VoteListContext';

const UserVoteBody = props => {

    return (
        <VoteListContext.Provider>
            <h1>VoteBody</h1>
            <UserVoteList />
        </VoteListContext.Provider>
    )
}

export default UserVoteBody;