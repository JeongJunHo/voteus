import React, { useState, useEffect, useContext, Fragment } from 'react';

import VoteListContext from '../../context/VoteListContext';

const UserVoteList = (props) => {
    const [loading, setLoading] = useState(null);
    const [vote, setVote] = useState(null);

    const votelist = useContext(VoteListContext);

    useEffect(()=>{
        setLoading(true)
        console.log(votelist)
        if (votelist !== null) {
            let vote = []
            for (let eachvote of votelist.keys()) {
                console.log(eachvote.code)
                vote.push(eachvote)
                setVote(vote)
            }
        }
        setLoading(false)
    }, [])

    const test = () => {
        console.log(votelist)
        if (votelist !== null) {
            for (let eachvote of votelist.keys()) {
                console.log(eachvote.code)
            }
        }
    }

    if (loading === false) {        
        return (
            <Fragment>
                {vote.map((each) => {
                    const changeVoteNumber = () => {
                        props.setVoteNumber(each.code)
                    }

                    return (
                        <button key={each.code} onClick={changeVoteNumber}>{each.name}</button>
                    )
                })}
                <button onClick={test}>test</button>
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