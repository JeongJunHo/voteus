import React, { useState, Fragment, useRef } from 'react';
import Webcam from 'react-webcam';

import axios from 'axios';

const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: 'user'
};

const UserAuthWebcam = props => {
    const [screenshot, setScreenShot] = useState('');

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
        setScreenShot(screenshot => imageSrc)
    }, [webcamRef]);
    
    const save = useRef(null);

    const send = () => {
        if (screenshot.length) {
            props.setResult(result => 'set')
            setTimeout(() => {sendFace()}, 2000)
        } else {
            alert('사진을 찍어주세요')
        }
    }

    const sendFace = () => {
        const data = {
            fd: screenshot,
            code: props.userinfocode
        }
        
        // const fd = screenshot;
        // axios.post('http://192.168.100.71:5000/getImg', {img: fd})
        axios.post('주소', data)
        .then(res => console.log(res))
        .catch(error => console.log(error))
        
        axios.get('주소')
        .then(res => {
            console.log(res) // 수정 필요
            if (res === 'true') {
                props.setResult(result => 'true')
            } else {
                props.setResult(result => 'false')
            }
        })
        .catch(error => console.log(error))

        props.setResult(result => 'true') // 테스트용(삭제 필요)
    }

    return (
        <Fragment>
            <button onClick={capture}>사진찍기</button>
            <button onClick={send}>전송</button>
            <Webcam
                audio={false}
                height={300}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={300}
                videoConstraints={videoConstraints}
            />
            {screenshot ? (
                <img
                    src={screenshot}
                    alt="screenshot"
                    ref={save}
                />
            ) : (
                null
            )}
        </Fragment>
    )
}

export default UserAuthWebcam;