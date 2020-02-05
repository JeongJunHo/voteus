import React, { useState, useEffect, Fragment } from 'react';

import { Redirect } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const UserVoteEnd = props => {
    const [redirect, setRedirect] = useState(false);

    const url = "/";

    useEffect(() => {
        setTimeout(()=>{setRedirect(true)}, 5000)
    })

    return (
        <Fragment>
            <h2>투표가 종료되었습니다.</h2>
            <h3>5초 뒤 초기화면으로 돌아갑니다. (Redirect)</h3>
            <Button variant="contained" color="primary" href={url}>돌아가기</Button>
            {redirect === true ? <Redirect to="/" /> : <div></div>}
        </Fragment>
    )
}

export default UserVoteEnd;