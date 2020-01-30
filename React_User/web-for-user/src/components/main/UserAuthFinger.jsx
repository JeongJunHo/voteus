import React, { useState, Fragment } from 'react';

import UserAuthFingerRecognition from '../main/UserAuthFingerRecognition';

import axios from 'axios';

const UserAuthFinger = props => {
    const [result, setResult] = useState('finger')
    
    const nextPage = () => {
        console.log(props.userinfocode)

        // 지문인증까지 완료하면 votelist를 받아온다.
        // axios.get('http://54.180.134.217:8080/api/vote/getVoteList/'+props.userinfocode)
        axios.get('dummy/vote_list.json')
        .then(res => {
            // res 값 확인
            console.log('res', res)
            props.setVoteList(voteList => res.data)
        })
        .catch(error => console.log(error))

        props.setNumber(number => number + 1)
    }

    const returnPage = () => {
        setResult(result => 'finger')
    }

    if (result === 'set') {
        return (
            <Fragment>
                <div>
                    인증중...
                </div>
            </Fragment>
        )
    } else if (result === 'true') {
        return (
            <Fragment>
                <div>
                    인증이 완료되었습니다.
                    <button onClick={nextPage}>다음</button>
                </div>
            </Fragment>
        )
    } else if (result === 'false') {
        return (
            <Fragment>
                <div>
                    인증이 실패되었습니다.
                    다시 인증하세요.
                    <button onClick={returnPage}>다시하기</button>
                </div>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <h1>지문 인증</h1>
                {result}
                <UserAuthFingerRecognition result={result} setResult={setResult} />
            </Fragment>
        )
    }
}

export default UserAuthFinger;