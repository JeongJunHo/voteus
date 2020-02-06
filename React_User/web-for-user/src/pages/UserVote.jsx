import React, { useEffect, useState, Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserVoteBody from '../layout/UserVoteBody';
import UserVoteStandBy from '../layout/UserVoteStandBy';
import UserVoteEnd from '../layout/UserVoteEnd';
import UserFooter from '../layout/UserFooter';

import VoteListContext from '../context/VoteListContext';

import FlexPaperTemplate from "../components/main/FlexPaperTemplate";

import axios from 'axios';

const UserVote = ({match}) => {
    const [votelist, setVoteList] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        setLoading(loading => true)
        const data = {
            code: match.params.code
        }

        // axios (Vote & Candidate)
        const voteMap = new Map()
        const resultMap = new Map()
        axios.get('http://54.180.134.217:8080/api/vote/getVoteList/' + match.params.code, data)
        .then(res => {
            // console.log(res.data)
            for (let vote of res.data) {
                // console.log('vote', vote)
                const candidatelist = []
                const candidateData = async () => {
                    try {
                        const res2 = await axios.get('http://54.180.134.217:8080/api/candi/getCandiVotecode/' + vote.code, {votecode: vote.code})
                        candidatelist.push(res2.data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                candidateData();

                voteMap.set(vote, candidatelist)
                setVoteList(voteMap)

                
                resultMap.set(vote.code, null)
                setResult(resultMap)
            }
            setStatus('standby')
        })
        .catch(error => console.log(error))

        setLoading(loading => false)
    }, [match.params.code])

    if (loading === false) {
        if (status === 'vote') {
            return (
                <Fragment>
                    <UserHeader>
                        <h1>투표 페이지(header)</h1>
                    </UserHeader>
                    <FlexPaperTemplate>
                        <VoteListContext.Provider value={votelist}>
                            <UserVoteBody user={match.params.code} setStatus={setStatus} result={result} setResult={setResult} />
                        </VoteListContext.Provider>
                    </FlexPaperTemplate>
                    <UserFooter />
                </Fragment>
            )
        } else if (status === 'standby') {
            return (
                <Fragment>
                    <UserHeader>
                        <h1>투표 페이지(header)</h1>
                    </UserHeader>
                    <FlexPaperTemplate>
                        <UserVoteStandBy votelist={votelist} setStatus={setStatus} />
                    </FlexPaperTemplate>
                    <UserFooter />
                </Fragment>
            )
        } else if (status === 'finish') {
            return (
                <Fragment>
                    <UserHeader>
                        <h1>투표 페이지(header)</h1>
                    </UserHeader>                    {/* {result} */}
                    {/* {voteresult} */}
                    <FlexPaperTemplate>
                        <UserVoteEnd />
                    </FlexPaperTemplate>
                    <UserFooter />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    로딩중 // 변경 필요2
                </Fragment>
            )
        }
    } else {
        return (
            <Fragment>
                로딩중 // 변경 필요1
            </Fragment>
        )
    }
}

export default UserVote;