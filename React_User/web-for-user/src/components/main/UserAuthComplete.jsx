import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const UserAuthComplete = (props) => {
    const url = "/user-vote/" + props.userinfocode;

    return (
        <Fragment>
            <h1>모든인증완료</h1>
            <p>투표를 해주세요</p>
            <Button variant="contained" color="primary" href={url}>투표 시작</Button>
        </Fragment>
    )
}

export default UserAuthComplete;