import React, { useState, Fragment, useRef } from 'react';
import Webcam from 'react-webcam';

import axios from 'axios';

const videoConstraints = {
    width: 1280,
    height: 720,
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
        let fd = screenshot;
        // console.log(save)
        // let files = save.files[0];
        // fd.append('file',files);
        // console.log(fd)

        axios.post('http://192.168.100.71:5000/getImg', {img: fd})
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }

    return (
        <Fragment>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>사진찍기</button>
            <button onClick={send}>전송</button>
            {screenshot ? <img id="file" src={screenshot} alt="screenshot" ref={save}/> : null}
        </Fragment>
    )
}

export default UserAuthWebcam;