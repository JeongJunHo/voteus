import React, { useEffect, useState, Fragment } from 'react';

import {
  makeStyles,
  LinearProgress,
  Grid,
  Paper,
  // Card,
  // CardContent,
  // Typography,
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

const UserVoteStandBy = props => {
  const classes = useStyles();

  const [votenamelist, setVoteNameList] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true)
    // console.log(props.votelist)
    const temp_votenamelist = []
    if (props.votelist !== null) {
      for (let eachvote of props.votelist.keys()) {
        // console.log(eachvote)
        temp_votenamelist.push(eachvote)
      }
    }
    setVoteNameList(temp_votenamelist)
    
    setLoading(false)
  }, [props.votelist])

  const changeStatus = () => {
    props.setStatus(status => 'vote')
  }

  if (loading === false) {        
    return (
      <Fragment>
        <div className={classes.flex}>
          <Grid
            container
            spacing={3}
            className={classes.header}
          >
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paperHeader}>
                <h1>{props.username}님의 투표 목록입니다.</h1>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.body}>
            {votenamelist.map((vote)=>{
              // console.log(vote)
              return (
                <Grid item xs={12} key={vote.code}>
                  <Paper elevation={0}>
                    {vote.name}
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
          <Grid
            container
            spacing={3}
            className={classes.header}
          >
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paperHeader}>
                <h2>총 {votenamelist.length}개의 투표가 있습니다.</h2>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} className={classes.header}>
            <Grid item xs={12}>
              <Paper elevation={0} className={classes.paperHeader}>              
                <Button
                  onClick={changeStatus}
                  variant="contained"
                  color="primary"
                  disableElevation
                  className={classes.submitButton}
                  fullWidth={true}
                >
                  투표 시작
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    )
  } else {
      return (
        <Fragment>
            <LinearProgress />
        </Fragment>
    )
  }
}

export default UserVoteStandBy;