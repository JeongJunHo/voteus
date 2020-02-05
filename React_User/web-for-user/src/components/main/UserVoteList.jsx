import React, { useState, useEffect, useContext, Fragment } from 'react';

import VoteListContext from '../../context/VoteListContext';

const UserVoteList = (props) => {
    const [vote, setVote] = useState(null);
    const [loading, setLoading] = useState(null);

    const votelist = useContext(VoteListContext);

    useEffect(()=>{
        setLoading(true)
        // console.log(votelist)
        if (votelist !== null) {
            const votecandidate = []
            for (let [onevote, candidatelist] of votelist) {
                let aboutvote = {}
                aboutvote.vote = onevote
                for (let [votecode, candidatecode] of props.result) {
                    if (votecode === onevote.code) {
                        if (candidatecode !== null) {
                            for (let onecandidate of candidatelist[0]) {
                                if (candidatecode === onecandidate.code) {
                                    aboutvote.candidate = onecandidate.name
                                }
                            }
                        } else {
                            aboutvote.candidate = null
                        }
                    }
                }
                votecandidate.push(aboutvote)
            }
            // console.log('c', votecandidate)
            setVote(votecandidate)
            props.setVoteResult(votecandidate)
        }
        setLoading(false)
    }, [votelist])

    if (loading === false) {        
        return (
            <Fragment>
                <h2>투표를 선택하세요.</h2>
                {vote.map((eachvote)=>{
                    // console.log(eachvote.vote.code)
                    const changeVoteNumber = () => {
                        props.setVoteNumber(eachvote.vote.code)
                    }
                    return (
                        <button key={eachvote.vote.code} onClick={changeVoteNumber}>{eachvote.vote.name}{eachvote.candidate}</button>
                    )
                })}
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                로딩중
            </Fragment>
        )
    }
}

export default UserVoteList;