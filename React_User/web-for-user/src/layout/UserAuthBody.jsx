import React, { useState, Fragment } from 'react';

import UserAuthName from '../components/main/UserAuthName';
import UserAuthFace from '../components/main/UserAuthFace';
import UserAuthFinger from '../components/main/UserAuthFinger';
import UserAuthComplete from '../components/main/UserAuthComplete';

import VoteListContext from '../context/VoteListContext';

const UserAuthBody = props => {
    const [number, setNumber] = useState(0);
    const [userinfo, setUserInfo] = useState('');
    const [votelist, setVoteList] = useState('');
    
    if ( number === 0 ) {
        return (
            <Fragment>
                {number}
                <UserAuthName number={number} setNumber={setNumber} userinfo={userinfo} setUserInfo={setUserInfo}/>
            </Fragment>
        )
    } else if ( number === 1 ) {
        return (
            <Fragment>
                {number}
                <UserAuthFace number={number} setNumber={setNumber} userinfocode={userinfo.code}/>
            </Fragment>
        )
    } else if ( number === 2 ) {
        return (
            <Fragment>
                {number}
                <UserAuthFinger number={number} setNumber={setNumber} userinfocode={userinfo.code} setVoteList={setVoteList}/>
            </Fragment>
        )
    } else {
        return (
            <VoteListContext.Provider value={votelist}>
                {number}
                <UserAuthComplete />
            </VoteListContext.Provider>
        )
    }
}

export default UserAuthBody;