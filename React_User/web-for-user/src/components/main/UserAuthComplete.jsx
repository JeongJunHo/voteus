import React, { useContext, Fragment } from "react";

import UserNameContext from '../../context/UserNameContext';

import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";

//image
import Election_logo from "../../images/Election_logo.png";

const UserAuthComplete = props => {
  const username = useContext(UserNameContext);

  const url = "/user-vote/" + props.userinfocode + "/" + username;

  return (
    <Fragment>
      <img src={Election_logo} height="50" alt="투표로고이미지"/>
      <h1>모든 인증 완료</h1>
      <p>투표 시작 버튼을 클릭해주세요</p>
      <Link href={url}>
        <Button variant="contained" color="primary">
          투표 시작
        </Button>
      </Link>
    </Fragment>
  );
};

export default UserAuthComplete;
