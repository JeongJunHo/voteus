import React, { useContext } from 'react';

import VoteListContext from '../../context/VoteListContext';

const UserVoteList = props => {
    const vote = useContext(VoteListContext);

    const test = () => {
        console.log(vote)
    }

    return (
        <div>
            uservotelist
            {/* {vote} */}
            <button onClick={test}>test</button>
        </div>
    )
}

export default UserVoteList;