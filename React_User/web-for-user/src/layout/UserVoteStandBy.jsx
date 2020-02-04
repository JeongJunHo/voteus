import React, { useEffect, useState, Fragment } from 'react';

// import VoteListContext from '../context/VoteListContext';

const UserVoteStandBy = props => {
    // const votelist = useContext(VoteListContext);
    const [votenamelist, setVoteNameList] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true)
        // console.log(props.votelist)
        const temp_votenamelist = []
        if (props.votelist !== null) {
            for (let eachvote of props.votelist.keys()) {
                console.log(eachvote)
                temp_votenamelist.push(eachvote)
            }
        }
        setVoteNameList(temp_votenamelist)
        setLoading(false)
    }, [props.votelist])

    const changeStatus = () => {
        props.setStatus(status => 'true')
    }

    if (loading === false) {        
        return (
            <Fragment>
                <h1>투표 목록</h1>
                <div>
                    {votenamelist.map((vote)=>(
                        <p key={vote.code}>{vote.name}</p>
                    ))}
                </div>
                <button onClick={changeStatus}>(일정 시간 지난 후 보여주기) 투표 시작</button>
            </Fragment>
        )
    } else {
        return (
            <div>로딩중</div>
        )
    }
}

export default UserVoteStandBy;