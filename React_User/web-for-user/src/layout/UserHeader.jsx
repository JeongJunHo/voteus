import React, { Fragment } from 'react';

const UserHeader = props => {
    return (
        <Fragment>
            <div>
                {props.children}
            </div>
        </Fragment>
    )
}

export default UserHeader;