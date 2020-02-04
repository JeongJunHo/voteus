import React, { useEffect, useState, Fragment } from 'react';

import UserVoteList from '../components/main/UserVoteList';

const UserVoteBody = props => {
    const [votenumber, setVoteNumber] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true)
        console.log(loading)

        setLoading(false)
    }, [])

    if (loading === false) {
        if (votenumber === null) {
            return (
                <Fragment>
                    <h2>투표를 선택하세요</h2>
                    <UserVoteList setVoteNumber={setVoteNumber} />
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    {votenumber}
                    <h2>후보를 선택하세요</h2>
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