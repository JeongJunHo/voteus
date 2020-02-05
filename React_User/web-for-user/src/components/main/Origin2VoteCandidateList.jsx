import React, { useEffect } from 'react';

const VoteCandidateList = props => {
    // useEffect(()=>{
    //     console.log(props.eachvotecandidatelist)
    // })

    const back = () => {
        props.setVoteNumber(null)
    }

    const test = () => {
        console.log(props.eachvotecandidatelist)
    }
    
    if (props.eachvotecandidatelist !== null) {
        return (
            <div>
                {props.eachvotecandidatelist.map((candidate) => {
                    return (
                        <button key={candidate.code} onClick={back}>{candidate.name}</button>
                    )
                })}
                <button onClick={back}>back</button>
            </div>
        )
    } else {
        return (
            <div>
                로딩중
                <button onClick={test}>test</button>
                <button onClick={back}>back</button>
            </div>
        )
    }
}

export default VoteCandidateList;