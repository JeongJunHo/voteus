import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const UserAuthComplete = props => {
    const check = () => {
        console.log(props.votelist)
    }
    
    return (
        <Fragment>
            <h1>모든인증완료</h1>
            <p>투표를 해주세요</p>
            <button onClick={check}>test</button>
            <Button variant="contained" color="primary" href="/user-vote">투표 시작</Button>
        </Fragment>
    )
}

export default UserAuthComplete;