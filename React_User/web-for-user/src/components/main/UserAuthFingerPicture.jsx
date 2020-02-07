import React, { useState, Fragment } from "react";

import axios from "axios";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import finger from "../../images/finger.png";

const UserAuthFingerRecognition = props => {
  const [fingerprint, setFingerPrint] = useState("");

  const send = () => {
    console.log("지문");

    // test
    setFingerPrint(fingerprint => "fingerprint");

    props.setResult(result => "set");
    setTimeout(() => {
      sendFinger();
    }, 2000);
  };

  const sendFinger = () => {
    const data = {
      name: "name",
      code: "code",
      fingerprint: fingerprint
    };

    axios.post("http://192.168.100.121:5000/getFinger")
      // .post("http://192.168.100.121:5000/getData")
      .then(res => {
        console.log("data 확인:::", res);
        // 수정 필요 (코드 값은 지문에서)
        if (res.data.code === "05") {
          props.setFinger(res.data.img)
          props.setResult(result => "getimage");
        } else {
          props.setResult(result => "false");
        }
      })
      .catch(error => console.log(error));

    // props.setResult(result => "true");
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src={finger} alt="finger-print" height="200" />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            fullWidth="true"
            onClick={send}
            autoFocus
          >
            인증
          </Button>
        </Grid>
      </Grid>

      {/* 지문을 인증하세요 */}
    </Fragment>
  );
};

export default UserAuthFingerRecognition;
