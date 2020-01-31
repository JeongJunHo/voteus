import React, { useState, Fragment } from 'react';

import axios from 'axios';

import finger from '../../images/finger.png';

const UserAuthFingerRecognition = props => {
    const [fingerprint, setFingerPrint] = useState('');

    const send = () => {
        console.log('지문')

        // test
        setFingerPrint(fingerprint => 'fingerprint')

        props.setResult(result => 'set')
        setTimeout(() => {sendFinger()}, 2000)
    }

    const sendFinger = () => {
        const data = {
            name: 'name',
            code: 'code',
            fingerprint: fingerprint
        }

        // 지문을 어떻게 받아올 것인지 생각해봐야 함
        axios.post('주소', data)
        .then(res => {
            // 수정 필요
            if (res === 'true') {
                props.setResult(result => 'true')
            } else {
                props.setResult(result => 'false')
            }
        })
        .catch(error => console.log(error))

        props.setResult(result => 'true')
    }

    return (
        <Fragment>
            <div>
                <img src={finger} alt="finger-print" width="300"/>
                지문을 인증하세요
                <button onClick={send}>인증</button>
            </div>
        </Fragment>
    )
}

export default UserAuthFingerRecognition;