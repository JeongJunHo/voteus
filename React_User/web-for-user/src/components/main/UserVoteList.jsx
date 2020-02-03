import React, { useContext } from 'react';

import VoteListContext from '../../context/VoteListContext';

const UserVoteList = (props) => {
    const votelist = useContext(VoteListContext);

    return (
        <div>
            {votelist !== null && votelist.map((vote) => {
                const changeVoteNumber = () => {
                    props.setVoteNumber(vote.code)
                }
                return (
                    <button key={vote.code} onClick={changeVoteNumber}>{vote.name}</button>
                )
            })}
        </div>
    )
}

export default UserVoteList;