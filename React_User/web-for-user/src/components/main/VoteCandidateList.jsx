import React, { useEffect, useState, useContext } from 'react';

import CandidateListContext from '../../context/CandidateListContext';

const VoteCandidateList = props => {
    const [loading, setLoading] = useState(null);
    const [candidate, setCandidate] = useState(null);

    const candidatelist = useContext(CandidateListContext);

    // 수정중입니다.
    useEffect(() => {
        if (candidatelist !== null) {
            setLoading(true)
            candidatelist.map((each) => (
                setCandidate(each.name)
            ))
        }
    }, [])

    const test = () => {
        console.log(candidatelist.map((candidate)=>(candidate.name)))
    }

    const back = () => {
        props.setVoteNumber(null)
    }

    return(
        <div>
            {props.votenumber}
            <button onClick={test}>test</button>
            <button onClick={back}>back</button>
        </div>
    )
}

export default VoteCandidateList;