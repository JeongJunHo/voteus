import React, { useEffect, useState, Fragment } from 'react';


const UserVoteStandBy = props => {
    const [votenamelist, setVoteNameList] = useState(null);
    const [showbutton, setShowButton] = useState(false);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(true)
        // console.log(props.votelist)
        const temp_votenamelist = []
        if (props.votelist !== null) {
            for (let eachvote of props.votelist.keys()) {
                // console.log(eachvote)
                temp_votenamelist.push(eachvote)
            }
        }
        setVoteNameList(temp_votenamelist)

        setTimeout(() => {setShowButton(true)}, 1000)
        setLoading(false)
    }, [props.votelist])

    const changeStatus = () => {
        props.setStatus(status => 'vote')
    }

    if (loading === false) {        
        return (
            <Fragment>
                <h1>투표 목록</h1>
                <div>
                    {votenamelist.map((vote)=>{
                        // console.log(vote)
                        return (
                            <p key={vote.code}>{vote.name}</p>
                        )
                    })}
                </div>
                {/* <button style={{display: {showbutton}}} onClick={changeStatus}>(일정 시간 지난 후 보여주기) 투표 시작</button> */}
                {showbutton === true ? (
                    <button onClick={changeStatus}>(일정 시간 지난 후 보여주기) 투표 시작</button>
                ) : (
                    <button style={{display: 'none'}} onClick={changeStatus}>(일정 시간 지난 후 보여주기) 투표 시작</button>
                )}
            </Fragment>
        )
    } else {
        return (
            <div>로딩중</div>
        )
    }
}

export default UserVoteStandBy;