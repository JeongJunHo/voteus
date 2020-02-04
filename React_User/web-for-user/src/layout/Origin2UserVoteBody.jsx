import React, { useEffect, useContext, useState, Fragment } from 'react';

import UserVoteList from '../components/main/UserVoteList';
import VoteCandidateList from '../components/main/VoteCandidateList';

import VoteListContext from '../context/VoteListContext';

const UserVoteBody = props => {
    const [votenumber, setVoteNumber] = useState(null);
    const [eachvotecandidatelist, setEachVoteCandidateList] = useState(null);
    const [votename, setVoteName] = useState(null);

    const votelist = useContext(VoteListContext);

    useEffect(() => {
        for (let index in props.votecodelist){
            if (props.votecodelist[index] === votenumber) {
                console.log('votenumber', votenumber)
                console.log(votelist[index])
                setEachVoteCandidateList(props.allcandidatelist[index])
                setVoteName(votelist[index].name)
            }
        }
    }, [votenumber])


    if (votenumber === null) {
        return (
            <Fragment>
                <p>투표 목록</p>
                <UserVoteList setVoteNumber={setVoteNumber} />
                <br/>

                <br/>
                <button>(후보 전체 선택 시) 투표완료</button>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <p>{votename}</p>
                votenumber: {votenumber}
                <p>후보 목록</p>
                <VoteCandidateList eachvotecandidatelist={eachvotecandidatelist} votenumber={votenumber} setVoteNumber={setVoteNumber} />
            </Fragment>
        )
    }
}
export default UserVoteBody;