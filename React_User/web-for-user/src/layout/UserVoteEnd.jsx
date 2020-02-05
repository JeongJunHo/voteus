import React, { Fragment } from 'react';

import Button from '@material-ui/core/Button';

const UserVoteEnd = props => {
    const url = "/";

    return (
        <Fragment>
            <h2>투표가 종료되었습니다.</h2>
            <Button variant="contained" color="primary" href={url}>돌아가기</Button>
        </Fragment>
    )
}

export default UserVoteEnd;