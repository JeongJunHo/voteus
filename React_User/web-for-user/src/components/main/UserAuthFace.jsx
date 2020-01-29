import React, { Fragment } from 'react';

import UserAuthWebcam from './UserAuthWebcam';

const UserAuthFace = props => {
    return (
        <Fragment>
            <h1>얼굴 인증</h1>
            <UserAuthWebcam />
        </Fragment>
    )
}

export default UserAuthFace;