import React, { useContext, Fragment } from 'react';

import VoteListContext from '../../context/VoteListContext';

import Button from '@material-ui/core/Button';

const UserAuthComplete = props => {
    const vote = useContext(VoteListContext);

    // const votelist = vote.data.map((eachvote)=>eachvote.code)

    const check = () => {
        console.log(props.votelist)
    }
    
    return (
        <Fragment>
            <h1>모든인증완료</h1>
            <p>투표를 해주세요</p>
            <div>
                투표 리스트 출력
                {/* {vote.map(eachvote => {
                    return eachvote.code
                })} */}
                {/* {vote.data.map((eachvote)=>{
                    return eachvote.code
                })} */}
                {props.votelist.data.map((each)=>each.name)}
            </div>
            <button onClick={check}>test</button>
            <Button variant="contained" color="primary" href="/user-vote">투표 시작</Button>
        </Fragment>
    )
}

export default UserAuthComplete;