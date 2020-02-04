import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const UserHomeBody = props => {
    return (
        <Fragment>
            <h1>인증을 시작합니다</h1>
            <Button variant="contained" color="primary" href="/user-auth">시작</Button>
        </Fragment>
    )
}

export default UserHomeBody;