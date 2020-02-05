import React, { useContext, useEffect, useState, Fragment } from 'react';

import UserVoteList from '../components/main/UserVoteList';
import UserVoteCandidateList from '../components/main/UserVoteCandidateList';

import VoteListContext from '../context/VoteListContext';
import axios from 'axios';

const UserVoteBody = props => {
    const [votenumber, setVoteNumber] = useState(null);
    const [votename, setVoteName] = useState(null);
    const [candidatelist, setCandidateList] = useState(null);
    const [endvote, setEndVote] = useState(false);
    const [voteresult, setVoteResult] = useState(null);

    const [loading, setLoading] = useState(null);

    const votelist = useContext(VoteListContext);

    useEffect(() => {
        setLoading(true)
        for (let [vote, candidate] of votelist) {
            if (votenumber === vote.code) {
                setVoteName(vote.name)
                setCandidateList(candidate)
            }
        }
        // console.log(props.result)

        let nullCnt = 0
        for (let candidate of props.result.values()) {
            // console.log(candidate)
            if (candidate === null) {
                nullCnt += 1
            }
        }
        if (nullCnt === 0) {
            setEndVote(true)
        }

        console.log(props.result)

        setLoading(false)
    }, [votenumber])

    // modal로 2차확인 필요 (voteresult)
    const finishVote = () => {
        // result를 candidate만 string으로 전달
        console.log(props.result)

        let candidatestring = props.user.toString() + '/'
        for (let candidatecode of props.result.values()) {
            console.log(candidatecode)
            candidatestring = candidatestring + candidatecode.toString() + ','
        }
        // back에 넘겨주는 string
        console.log('data', candidatestring)
        // console.log('http://54.180.134.217:8080/api/candi/updateCandiList/' + candidatestring)

        // // axios 일단 주석으로
        // axios.put('http://54.180.134.217:8080/api/candi/updateCandiList/' + candidatestring)
        // .then(res => console.log(res))
        // .catch(error => console.log(error))

        console.log(voteresult)
        props.setStatus('finish')
        
    }

    if (loading === false) {
        if (votenumber === null) {
            return (
                <Fragment>
                    <UserVoteList setVoteResult={setVoteResult} setVoteNumber={setVoteNumber} result={props.result} />
                    {endvote === true ? (
                        <button onClick={finishVote}>완료</button>
                    ) : (
                        <p>모든 투표를 완료해 주세요.</p>
                    )}
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <UserVoteCandidateList votenumber={votenumber} setVoteNumber={setVoteNumber} votename={votename} candidatelist={candidatelist} result={props.result} setResult={props.setResult}/>
                </Fragment>
            )
        }
    } else {
        return (
            <Fragment>
                로딩중
            </Fragment>
        )
    }
}

export default UserVoteBody;