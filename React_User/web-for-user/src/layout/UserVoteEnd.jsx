import React, { useState, useEffect, Fragment } from 'react';

import { Redirect } from 'react-router-dom';

import {
  makeStyles,
  LinearProgress,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "space-between",
    // height: "100%",
    // width: "100%",
    // position: "absolute"
  },
  header: {
    padding: theme.spacing(1),
    // margin: theme.spacing(1),
  },
  body : {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  paperHeader: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardBody: {
    // padding: theme.spacing(1),
    // textAlign: "center",
    // boxShadow: "",
    "&:hover": {
      boxShadow: "0 4px 20px -6px #880e4f"
    },
    // color: theme.palette.text.secondary,
    backgroundColor: '#fce4ec',
  },
  cardBodySelect: {
    // paddingLeft: theme.spacing(1),
    // paddingRight: theme.spacing(1),
    // paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
    // textAlign: "center",
    // boxShadow: "",
    "&:hover": {
      boxShadow: "0 4px 20px -6px #1b5e20"
    },
    // color: theme.palette.text.secondary,
    backgroundColor: '#e8f5e9',
  },
  vote: {
    padding: theme.spacing(1),
  },
  candidate: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center",
  },
  candidateNone: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center",
    color: '#ffa199',
  },
  submitButton: {
    justifyContent: "center",
  },
  submitButtonHidden: {
    justifyContent: "center",
    visibility: "hidden",
  },
}));

const UserVoteEnd = props => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState(false);

  const url = "/";

  useEffect(() => {
      setTimeout(()=>{setRedirect(false)}, 5000)
  },[])

  return (
    <Fragment>
      <div className={classes.flex}>
        <Grid container spacing={3} className={classes.header}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paperHeader}>
              <h1>투표가 종료되었습니다.</h1>
              {redirect === true ? <Redirect to="/" /> : <h2>5초 후 처음 화면으로 돌아갑니다.</h2>}
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.body}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" href={url}>처음 화면으로 돌아가기</Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

export default UserVoteEnd;