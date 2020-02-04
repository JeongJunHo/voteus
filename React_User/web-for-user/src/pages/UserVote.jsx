import React, { useEffect, useState, Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserVoteBody from '../layout/UserVoteBody';
import UserVoteStandBy from '../layout/UserVoteStandBy';
import UserFooter from '../layout/UserFooter';

import VoteListContext from '../context/VoteListContext';
// import CandidateListContext from '../context/CandidateListContext';

import axios from 'axios';

const UserVote = ({match}) => {
    const [votelist, setVoteList] = useState(null);
    const [votecodelist, setVoteCodeList] = useState(null);
    const [allcandidatelist, setAllCandidateList] = useState(null);
    const [status, setStatus] = useState('false');
    const [loading, setLoading] = useState(null);

    // axios
    useEffect(() => {
        setLoading(loading => true)
        const data = {
            code: match.params.code
        }

        const voteMap = new Map()

        axios.get('http://54.180.134.217:8080/api/vote/getVoteList/' + match.params.code, data)
        .then(res => {
            console.log(res.data)

            res.data.map((vote) => {
                console.log(vote.code)
                const candidatelist = []
                const candidateData = async () => {
                    try {
                        const res2 = await axios.get('http://54.180.134.217:8080/api/candi/getCandiVotecode/' + vote.code, {votecode: vote.code})
                        console.log(res2.data)
                        candidatelist.push(res2.data)
                    } catch (error) {
                        console.log(error)
                    }
                }
                candidateData();
                voteMap.set(vote, candidatelist)
                console.log(voteMap)
                setVoteList(voteMap)
            })
        })
        .catch(error => console.log(error))

        console.log('dd', voteMap)
        setLoading(loading => false)
    }, [match.params.code])

    // // axios
    // useEffect(() => {
    //     setLoading(loading => true)
    //     const data = {
    //         code: match.params.code
    //     }
    //     axios.get('http://54.180.134.217:8080/api/vote/getVoteList/' + match.params.code, data)
    //     .then(res => {
    //         console.log(res.data)
    //         setVoteList(res.data)

    //         const votelistlength = res.data.length
    //         let tempvotecodelist = []
    //         let candidateinfo = []

    //         let temp = []
    //         for (let vote of res.data) {
    //             axios.get('http://54.180.134.217:8080/api/candi/getCandiVotecode/' + vote.code, {votecode: vote.code})
    //             .then(res2 => {
    //                 console.log('res', res2)
    //                 temp.push(vote.code)
    //                 console.log(temp)
    //             })
    //             .catch(error => console.log(error))
    //         }

    //         for (let i=0; i < votelistlength; i++) {
    //             axios.get('http://54.180.134.217:8080/api/candi/getCandiVotecode/' + res.data[i].code, {votecode: res.data[i].code})
    //             .then(res2 => {
    //                 tempvotecodelist.push(res.data[i].code)
    //                 candidateinfo.push(res2.data)
    //                 if ( votelistlength === candidateinfo.length ) {
    //                     console.log('temp', tempvotecodelist)
    //                     console.log('candi', candidateinfo)
    //                     setVoteCodeList(tempvotecodelist)
    //                     setAllCandidateList(candidateinfo)
    //                 }
    //             })
    //             .catch(error => console.log(error))
    //         }
    //     })
    //     .catch(error => console.log(error))
    //     setLoading(loading => false)
    // }, [match.params.code])

    if (loading === false) {
        if (status === 'true') {
            return (
                <Fragment>
                    <UserHeader>
                        <h1>투표 페이지(header)</h1>
                    </UserHeader>
                    {/* <VoteListContext.Provider value={votelist}>
                        <UserVoteBody allcandidatelist={allcandidatelist} votecodelist={votecodelist} />
                    </VoteListContext.Provider> */}
                    <VoteListContext.Provider value={votelist}>
                        <UserVoteBody />
                    </VoteListContext.Provider>
                    <UserFooter />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <UserHeader>
                        <h1>투표 페이지(header)</h1>
                    </UserHeader>
                    {/* <VoteListContext.Provider value={votelist}>
                        <UserVoteStandBy setStatus={setStatus} />
                    </VoteListContext.Provider> */}
                    <UserVoteStandBy votelist={votelist} setStatus={setStatus} />
                    <UserFooter />
                </Fragment>
            )
        }
    } else {
        return (
            <Fragment>
                로딩중 // 변경 필요
            </Fragment>
        )
    }
}

export default UserVote;