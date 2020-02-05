import React, { useState, useEffect, Fragment } from 'react';

const UserVoteCandidateList = props => {
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true)
        setLoading(false)
    }, [props.candidatelist])

    // const selectCandidate = () => {
    //     console.log(props.votenumber)
    //     props.result.set(props.votenumber, '11')
    //     console.log(props.result)
    //     props.setResult('yeah')
    //     props.setVoteNumber(null)
    // }

    // const test = () => {
    //     props.setResult('yeah')
    // }

    if (loading === false) {
        return (
            <Fragment>
                <h2>{props.votename} 투표입니다.</h2>
                <h2>후보를 선택하세요.</h2>
                {props.candidatelist[0].map((eachcandidate) => {
                    // console.log(eachcandidate)
                    const selectCandidate = () => {
                        props.result.set(props.votenumber, eachcandidate.code)
                        props.setResult(props.result)
                        props.setVoteNumber(null)
                    }
                    
                    return (
                        <button key={eachcandidate.code} onClick={selectCandidate}>{eachcandidate.name}</button>
                    )
                })}
                {/* <button onClick={selectCandidate}>후보자 선택</button> */}
                {/* <button onClick={test}>test</button> */}
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

export default UserVoteCandidateList;