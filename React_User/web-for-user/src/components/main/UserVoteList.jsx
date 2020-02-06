import React, { useState, useEffect, useContext, Fragment } from 'react';

import VoteListContext from '../../context/VoteListContext';

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
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    height: "90%",
    width: "100%"
  },
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
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
    // margin: theme.spacing(1)
  },
  paperHeader: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardBody: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // textAlign: "center",
    // boxShadow: "",
    "&:hover": {
      boxShadow: "0 4px 20px -6px #880e4f"
    },
    // color: theme.palette.text.secondary,
    backgroundColor: '#fce4ec',
  },
  cardBodySelect: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    // textAlign: "center",
    // boxShadow: "",
    "&:hover": {
      boxShadow: "0 4px 20px -6px #1b5e20"
    },
    // color: theme.palette.text.secondary,
    backgroundColor: '#e8f5e9',
  },
  party: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)

  },
  candidate: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center",
  },
  submitButton: {
    justifyContent: "center"
  }
}));

const UserVoteList = (props) => {
  const classes = useStyles();

  const [vote, setVote] = useState(null);
  const [loading, setLoading] = useState(null);

  const votelist = useContext(VoteListContext);

  useEffect(()=>{
    setLoading(true)
    // console.log(votelist)
    if (votelist !== null) {
      const votecandidate = []
      for (let [onevote, candidatelist] of votelist) {
        let aboutvote = {}
        aboutvote.vote = onevote
        for (let [votecode, candidatecode] of props.result) {
          if (votecode === onevote.code) {
            if (candidatecode !== null) {
              for (let onecandidate of candidatelist[0]) {
                if (candidatecode === onecandidate.code) {
                  aboutvote.candidate = onecandidate.name
                }
              }
            } else {
              aboutvote.candidate = null
            }
          }
        }
        votecandidate.push(aboutvote)
      }
      // console.log('c', votecandidate)
      setVote(votecandidate)
      props.setVoteResult(votecandidate)
    }
    setLoading(false)
  }, [votelist])

  if (loading === false) {
    return (
      <Fragment>
        <div className={classes.root}>

          <div className={classes.flex}>
            <Grid container spacing={3} className={classes.header}>
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paperHeader}>
                  <h1>투표 목록입니다.</h1>
                  <h2>투표를 선택해주세요.</h2>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.body}>
              {vote.map((eachvote)=>{
                // console.log(eachvote.vote.code)
                const changeVoteNumber = () => {
                  props.setVoteNumber(eachvote.vote.code)
                }
                if (eachvote.candidate === null) {
                  return (
                    <Grid item xs={6} key={eachvote.vote.code}>
                      <Card variant="outlined" onClick={changeVoteNumber} className={classes.cardBody}>
                        <CardContent>
                          <Typography className={classes.party}>
                            {eachvote.vote.name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                } else {
                  return (
                    <Grid item xs={6} key={eachvote.vote.code}>
                      <Card variant="outlined" onClick={changeVoteNumber} className={classes.cardBodySelect}>
                        <CardContent>
                          <Typography className={classes.party}>
                            {eachvote.vote.name}
                          </Typography>
                          <Typography className={classes.candidate}>
                            <b>{eachvote.candidate}</b>
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  )
                }
              })}
            </Grid>
          </div>
          <div className={classes.flex}>

            <Grid container spacing={3} className={classes.header}>
              {props.endvote === true ? (
                <Grid item xs={12}>
                  <Paper elevation={0} className={classes.paperHeader}>
                    <Button onClick={props.finishVote} variant="contained" color="primary" disableElevation className={classes.submitButton} fullWidth="true">
                      완료
                    </Button>
                  </Paper>
                </Grid>
              ) : (
                <Grid item xs={12}>
                  <Paper elevation={0} className={classes.paperHeader}>
                    <p>모든 투표를 완료해 주세요.</p>
                  </Paper>
                </Grid>
              )}
            </Grid>
          </div>
        </div>
      </Fragment>
    )

    // return (
    //   <Fragment>
    //     <h2>투표를 선택하세요.</h2>
    //     {vote.map((eachvote)=>{
    //       // console.log(eachvote.vote.code)
    //       const changeVoteNumber = () => {
    //         props.setVoteNumber(eachvote.vote.code)
    //       }
    //       return (
    //         <button key={eachvote.vote.code} onClick={changeVoteNumber}>{eachvote.vote.name}{eachvote.candidate}</button>
    //       )
    //     })}
    //   </Fragment>
    // )
  } else {
    return (
      <Fragment>
        <LinearProgress />
      </Fragment>
    )
  }
}

export default UserVoteList;