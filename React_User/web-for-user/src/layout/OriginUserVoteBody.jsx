import React, { useEffect, useState, Fragment } from 'react';

import UserVoteList from '../components/main/UserVoteList';
import VoteCandidateList from '../components/main/VoteCandidateList';

import CandidateListContext from '../context/CandidateListContext';

import axios from 'axios';

const UserVoteBody = props => {
    const [votenumber, setVoteNumber] = useState(null);
    const [candidatelist, setCandidateList] = useState(null);
    const [loading, setLoading] = useState(null);

    // axios
    useEffect(()=>{
        setLoading(true)
        const data = {
            votecode: votenumber
        }
        axios.get('http://54.180.134.217:8080/api/candi/getCandiVotecode/' + votenumber, data)
        .then(res => {
            console.log(res.data)
            setCandidateList(res.data)
        })
        .catch(error => console.log(error))
        setLoading(false)
    }, [votenumber])

    if (loading === false) {
        if (votenumber === null) {
            return (
                <Fragment>
                    <UserVoteList setVoteNumber={setVoteNumber} />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <CandidateListContext.Provider value={candidatelist}>
                        <VoteCandidateList votenumber={votenumber} setVoteNumber={setVoteNumber}/>
                    </CandidateListContext.Provider>
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
export default UserVoteBody;