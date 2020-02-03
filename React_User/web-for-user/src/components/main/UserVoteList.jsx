import React, { useContext } from 'react';

import VoteListContext from '../../context/VoteListContext';

const UserVoteList = (props) => {
    const vote = useContext(VoteListContext);

    const test = () => {
        console.log(vote)
        // console.log(match.params.userinfocode)
        // console.log(props)
    }

    return (
        <div>
            uservotelist
            {/* {vote.data.map((eachvote)=>eachvote.name)} */}
            <button onClick={test}>test</button>
        </div>
    )
}

export default UserVoteList;