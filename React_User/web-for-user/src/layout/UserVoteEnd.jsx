import React, { useState, useEffect, Fragment } from 'react';

// import { Redirect } from 'react-router-dom';

import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "75%",
    width: "100%",
    position: "absolute"
  }
});

const UserVoteEnd = props => {
  const classes = useStyles();
  // const [redirect, setRedirect] = useState(false);

  const url = "/";

  // useEffect(() => {
  //     setTimeout(()=>{setRedirect(true)}, 5000)
  // },[])

  return (
    <Fragment>
      <div className={classes.flex}>  
        <h1>투표가 종료되었습니다.</h1>
        <h2>5초 후 처음 화면으로 돌아갑니다.</h2>
        <Button variant="contained" color="primary" href={url}>처음 화면으로 돌아가기</Button>
        {/* {redirect === true ? <Redirect to="/" /> : <div></div>} */}
      </div>
    </Fragment>
  )
}

export default UserVoteEnd;