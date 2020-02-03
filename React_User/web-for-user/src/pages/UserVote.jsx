import React, { useState, Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserVoteBody from '../layout/UserVoteBody';
import UserFooter from '../layout/UserFooter';
import VoteListContext from '../context/VoteListContext';

import axios from 'axios';

const UserVote = ({match}) => {
    const [status, setStatus] = useState('wait');
    const [votelist, setVotelist] = useState(null);

    // axios
    const getVoteList = () => {
        const data = {
            code: match.params.code
        }
        axios.post('http://54.180.134.217:8080/api/vote/getVoteAllList/' + match.params.code, data)
        .then(res => {
            console.log(res)
            setVotelist(votelist => res.data)
        })
        .catch(error => console.log(error))
    }

    return (
        <Fragment>
            <UserHeader>
                <h1>투표 페이지(header)</h1>
            </UserHeader>
            <VoteListContext.Provider value={match.params.code}>
                <UserVoteBody />
            </VoteListContext.Provider>
            <UserFooter />
        </Fragment>
    )
}

export default UserVote;