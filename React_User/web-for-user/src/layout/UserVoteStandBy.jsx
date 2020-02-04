import React, { useContext, Fragment } from 'react';

import VoteListContext from '../context/VoteListContext';

const UserVoteStandBy = props => {
    const votelist = useContext(VoteListContext);

    const changeStatus = () => {
        props.setStatus(status => 'true')
    }

    return (
        <Fragment>
            <h1>투표 목록</h1>
            <div>
                {votelist !== null && votelist.map((vote) => (
                    <p key={vote.code}>{vote.name}</p>
                ))}
            </div>
            <button onClick={changeStatus}>(일정 시간 지난 후 보여주기) 투표 시작</button>
        </Fragment>
    )
}

export default UserVoteStandBy;