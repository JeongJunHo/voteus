import React, { useState, Fragment } from 'react';

import UserAuthName from '../components/main/UserAuthName';
import UserAuthFace from '../components/main/UserAuthFace';
import UserAuthFinger from '../components/main/UserAuthFinger';
import UserAuthComplete from '../components/main/UserAuthComplete';

const UserAuthBody = props => {
    const [number, setNumber] = useState(0);
    
    if ( number === 0 ) {
        return (
            <Fragment>
                {number}
                <UserAuthName setNumber={setNumber} />
            </Fragment>
        )
    } else if ( number === 1 ) {
        return (
            <Fragment>
                {number}
                <UserAuthFace />
            </Fragment>
        )
    } else if ( number === 2 ) {
        return (
            <Fragment>
                {number}
                <UserAuthFinger />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                {number}
                <UserAuthComplete />
            </Fragment>
        )
    }

    // return (
    //     <Fragment>
    //         <h1>body</h1>
    //         if ( number === 0 ) {
    //             <UserAuthName />
    //         } else if ( number === 1 ) {
    //             <UserAuthFace />
    //         } else {
    //             <UserAuthFinger />
    //         }

    //     </Fragment>
    // )
}

export default UserAuthBody;