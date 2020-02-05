import React, { useState, Fragment, useContext } from "react";

import UserAuthFaceWebcam from "./UserAuthFaceWebcam";
import UserNameContext from "../../context/UserNameContext";
import Button from "@material-ui/core/Button";

const UserAuthFace = props => {
  const [result, setResult] = useState("face");
  const [capture, setCapture] = useState("capture");
  const userName = useContext(UserNameContext);

  const nextPage = () => {
    // console.log(props.number)
    props.setNumber(number => number + 1);
  };

  const returnPage = () => {
    setResult(result => "face");
  };

  if (result === "set") {
    return (
      <Fragment>
        <div>인증중...</div>
      </Fragment>
    );
  } else if (result === "true") {
    return (
      <Fragment>
        <div>
          <p>인증에 성공했습니다.</p>
          <p>지문인증화면으로 진행됩니다.</p>
          <Button
            variant="contained"
            size="large"
            color="primary"
            fullWidth="true"
            onClick={nextPage}
          >
            다음
          </Button>
        </div>
      </Fragment>
    );
  } else if (result === "false") {
    return (
      <Fragment>
        <div>
          인증이 실패되었습니다. 다시 인증하세요.
          <Button
            variant="contained"
            size="large"
            color="primary"
            fullWidth="true"
            onClick={returnPage}
          >
            다시하기
          </Button>
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <h1>{userName}님 카메라를 응시해주세요.</h1>
        <UserAuthFaceWebcam result={result} setResult={setResult} />
      </Fragment>
    );
  }
};

export default UserAuthFace;
