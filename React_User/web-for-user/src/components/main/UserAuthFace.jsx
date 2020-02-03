import React, { useState, Fragment } from 'react';

import UserAuthFaceWebcam from './UserAuthFaceWebcam';

const UserAuthFace = props => {
    const [result, setResult] = useState('face')

    const nextPage = () => {
        // console.log(props.number)
        props.setNumber(number => number + 1)
    }

    const returnPage = () => {
        setResult(result => 'face')
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
                    {/* 처음 화면으로 돌아가는 버튼 필요 (이름 잘못 입력했을 경우) */}
                </div>
            </Fragment>
        ) 
    } else {
        return (
            <Fragment>
                <h1>얼굴 인증</h1>
                {props.number}
                <UserAuthFaceWebcam result={result} setResult={setResult} />
            </Fragment>
        )
    }

}

export default UserAuthFace;