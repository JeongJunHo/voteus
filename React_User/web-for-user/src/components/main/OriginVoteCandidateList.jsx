import React, { useContext } from 'react';

import CandidateListContext from '../../context/CandidateListContext';

const VoteCandidateList = props => {
    const candidatelist = useContext(CandidateListContext);

    // // console.log("dddd", candidatelist)
    // useEffect(()=>{
    //     console.log('test')
    //     console.log(candidatelist)
    //     // for(let i=0; i<candidatelist.length; i++){
    //     //     console.log(candidatelist[i].name)
    //     // }
    //     const map_value = (candidatelist !== "failure" && candidatelist.map((candidate)=>(
    //         console.log(candidate.name)
    //     )))
    //     console.log("확인");
    //     console.log(map_value)
    // }, [candidatelist])

    const test = () => {
        // console.log(candidatelist.map((candidate)=>(candidate.name)))
        console.log(candidatelist[0].name)
    }

    const back = () => {
        props.setVoteNumber(null)
    }
    if (candidatelist !== "failure") {
        return(
            <div>
                {/* {props.votenumber} */}
                {candidatelist.map((candidate) => (
                    <p>{candidate.name}</p>
                ))}
                <button onClick={test}>test</button>
                <button onClick={back}>back</button>
            </div>
        )
    } else {
        return (
            <div>
                로딩중
            </div>
        )
    }
}

export default VoteCandidateList;