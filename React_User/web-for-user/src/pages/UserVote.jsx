import React, { useEffect, useState, Fragment } from 'react';

import UserHeader from '../layout/UserHeader';
import UserVoteBody from '../layout/UserVoteBody';
import UserVoteStandBy from '../layout/UserVoteStandBy';
import UserFooter from '../layout/UserFooter';

import VoteListContext from '../context/VoteListContext';

import axios from 'axios';

const UserVote = ({match}) => {
    const [votelist, setVoteList] = useState(null);
    const [status, setStatus] = useState('false');
    const [loading, setLoading] = useState(null);

    // axios
    useEffect(() => {
        setLoading(loading => true)
        const data = {
            code: match.params.code
        }
        axios.get('http://54.180.134.217:8080/api/vote/getVoteList/' + match.params.code, data)
        .then(res => {
            console.log(res.data)
            setVoteList(res.data)
        })
        .catch(error => console.log(error))
        setLoading(loading => false)

                // const fetchData = async () => {
        //     setLoading(true);
            
        //     try {
        //         const data = {
        //             code: match.params.code
        //         }

        //         const res = await axios.get(
        //             'http://54.180.134.217:8080/api/vote/getVoteList/' + match.params.code,
        //             data
        //         )
        //         setVoteList(res.data)
        //     } catch (error) {
        //         console.log(error)
        //     }
        //     setLoading(false)
        // }
        // fetchData()
    }, [])

    if (loading === false) {
        if (status === 'true') {
            return (
                <Fragment>
                    <UserHeader>
                        <h1>투표 페이지(header)</h1>
                    </UserHeader>
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
                    <VoteListContext.Provider value={votelist}>
                        <UserVoteStandBy setStatus={setStatus} />
                    </VoteListContext.Provider>
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