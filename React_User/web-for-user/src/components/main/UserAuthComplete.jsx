import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const UserAuthComplete = props => {
    return (
        <Fragment>
            <h1>인증완료</h1>
            <Button variant="contained" color="primary" href="/user-vote">다음</Button>
        </Fragment>
    )
}

export default UserAuthComplete;