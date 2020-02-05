import React, { useContext, useState, Fragment, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Webcam from "react-webcam";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import axios from "axios";

import UserNameContext from "../../context/UserNameContext";

const useStyles = makeStyles(theme => ({
  m_b_10: {
    marginBottom: "10px"
  },
  mh_600: {
    minHeight: "600px"
  }
}));

const videoConstraints = {
  width: 600,
  height: 600,
  facingMode: "user"
};

const UserAuthWebcam = props => {
  const classes = useStyles();

  const [screenshot, setScreenShot] = useState("");
  const username = useContext(UserNameContext);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setScreenShot(screenshot => imageSrc);
  }, [webcamRef]);

  const reset = React.useCallback(() => {
    setScreenShot("");
  }, []);

  const save = useRef(null);

  const send = () => {
    if (screenshot.length) {
      props.setResult(result => "set");
      setTimeout(() => {
        sendFace();
      }, 2000);
    } else {
      alert("사진을 찍어주세요");
    }
  };

  const sendFace = () => {
    const fd = screenshot;
    console.log(username);
    // const data = {
    //     fd: screenshot,
    //     // code: props.userinfocode
    //     name: '이름'
    // }

    axios
      .post("주소", { img: fd, name: username })
      // axios.post('http://192.168.100.71:5000/getImg', {img: fd, name: username})
      .then(res => {
        console.log("resss", res.data); // 수정 필요
        if (res.data === true) {
          props.setResult(result => "true");
        } else {
          props.setResult(result => "false");
        }
      })
      .catch(error => console.log(error));

    props.setResult(result => "true"); // 테스트용(삭제 필요)
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.mh_600}>
          {screenshot === "" && (
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width="100%"
              videoConstraints={videoConstraints}
            />
          )}
          {screenshot ? (
            <img src={screenshot} alt="screenshot" ref={save} />
          ) : null}
        </Grid>
        {screenshot ? (
          <>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth="true"
                onClick={send}
              >
                인증
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth="true"
                onClick={reset}
              >
                재촬영
              </Button>
            </Grid>
          </>
        ) : (
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth="true"
              onClick={capture}
            >
              촬영
            </Button>
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default UserAuthWebcam;
