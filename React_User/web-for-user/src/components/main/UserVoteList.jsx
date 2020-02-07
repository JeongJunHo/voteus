import React, { useState, useEffect, useContext, Fragment } from 'react';

import UserNameContext from '../../context/UserNameContext';
import VoteListContext from '../../context/VoteListContext';

import {
  makeStyles,
  LinearProgress,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    padding: theme.spacing(1),
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
    "&:hover": {
      boxShadow: "0 4px 20px -6px #880e4f"
    },
    backgroundColor: '#fce4ec',
  },
  cardBodySelect: {
    "&:hover": {
      boxShadow: "0 4px 20px -6px #1b5e20"
    },
    backgroundColor: '#c8e6c9',
  },
  vote: {
    padding: theme.spacing(1),
  },
  candidate: {
    textAlign: "center",
  },
  candidateNone: {
    textAlign: "center",
    color: '#ffa199'
  },
  submitButton: {
    justifyContent: "center"
  },
  candidateColor: {
    backgroundColor: "#e1bee7"
  }
}));

const UserVoteList = (props) => {
  const classes = useStyles();

  const username = useContext(UserNameContext);

  const [dialogopen, setDialogOpen] = useState(false);
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

  const dialogOpen = () => {
    // console.log('dialog')
    setDialogOpen(true);
  }

  const dialogClose = () => {
    setDialogOpen(false);
  }

  if (loading === false) {
    return (
      <Fragment>
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
                  <Grid item xs={12} key={eachvote.vote.code}>
                    <Card
                      variant="outlined"
                      onClick={changeVoteNumber}
                      className={classes.cardBody}
                    >
                      <CardContent>
                        <Typography className={classes.vote}>
                          {eachvote.vote.name}
                        </Typography>
                        <Typography className={classes.candidateNone}>
                          후보를 선택해주세요.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              } else {
                return (
                  <Grid item xs={12} key={eachvote.vote.code}>
                    <Card
                      variant="outlined"
                      onClick={changeVoteNumber}
                      className={classes.cardBodySelect}
                    >
                      <CardContent>
                        <Typography className={classes.vote}>
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
          <Grid container spacing={3} className={classes.header}>
            {props.endvote === true ? (
              <Grid item xs={12}>
                <Paper elevation={0} className={classes.paperHeader}>
                  <Button
                    onClick={dialogOpen}
                    variant="contained"
                    color="primary"
                    disableElevation
                    className={classes.submitButton}
                    fullWidth={true}
                  >
                    투표 완료
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
        <Dialog
          onClose={dialogClose}
          open={dialogopen}
          fullWidth={true}
          maxWidth="xs"
          PaperProps={{ className: [classes.flex] }}
        >
          <DialogTitle>
            {username}님의 투표 정보입니다.
          </DialogTitle>
          <DialogContent>
            <div>
              님은
            </div>
            {vote.map((eachvote) => {
              if (eachvote.candidate === '1번투표무효표') {
                return (
                  <div key={eachvote.vote.code}>
                    {eachvote.vote.name}에 <span className={classes.candidateColor}>무효표</span>를
                  </div>
                )
              } else {
                return (
                  <div key={eachvote.vote.code}>
                    {eachvote.vote.name}에 <span className={classes.candidateColor}>{eachvote.candidate}</span> 후보를
                  </div>
                )
              }
            })}
            <div>
              선택하셨습니다.
            </div>
          </DialogContent>
          <DialogContent>
            <p>투표 하시겠습니까?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.finishVote}>
              확인
            </Button>
            <Button onClick={dialogClose}>
              취소
            </Button>
          </DialogActions>
        </Dialog>
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

export default UserVoteList;