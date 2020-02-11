import React, { useState, useEffect, useContext, Fragment } from 'react';

// import UserNameContext from '../../context/UserNameContext';
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
    marginBottom: theme.spacing(1),
  },
  paperHeader: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  cardBody: {
    "&:hover": {
      boxShadow: "0 4px 20px -6px #880e4f",
    },
    // backgroundColor: '#fce4ec',
    borderRadius: theme.spacing(3),
    borderColor: "#f44336"
    // background:
    // // 'linear-gradient(34deg, #f44336 0%, #f6685e 29%, #f44336 92%)',
    // 'radial-gradient(farthest-side at 20% 20%, #e57373, #ef5350, #f44336)',
  },
  cardBodySelect: {
    "&:hover": {
      boxShadow: "0 4px 20px -6px #1b5e20",
    },
    // backgroundColor: "#4caf50",
    backgroundColor: "#8bc34a",
    borderRadius: theme.spacing(3),
    // background:
    //   // 'linear-gradient(34deg, #4caf50 0%, #6fbf73 29%, #4caf50 92%)',
    //   'radial-gradient(farthest-side at 20% 20%, #81c784, #66bb6a, #4caf50)',
  },
  vote: {
    padding: theme.spacing(1),
  },
  candidate: {
    textAlign: "center",
  },
  candidateNone: {
    textAlign: "center",
    // color: "#ffcdd2",
    color: "#f7b3b6",
  },
  submitButton: {
    justifyContent: "center",
  },
  candidateColor: {
    backgroundColor: "#e1bee7",
  },
  dialog: {
    // alignItems: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  textCenter: {
    textAlign: "center",
  },
  buttonSpace: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  cardSpace: {
    padding: theme.spacing(1),
    "&:last-child": {
      paddingBottom: theme.spacing(2)
    }
  },
  selectedVote: {
    // color: "#757575",
    color: "#357a38",
  },
}));

const UserVoteList = (props) => {
  const classes = useStyles();

  // const username = useContext(UserNameContext);
  const votelist = useContext(VoteListContext);

  const [dialogopen, setDialogOpen] = useState(false);
  const [vote, setVote] = useState(null);
  const [loading, setLoading] = useState(null);

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
      // props.setVoteResult(votecandidate)
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
          <Grid container spacing={2} className={classes.body}>
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
                      <CardContent className={classes.cardSpace}>
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
                      // variant="outlined"
                      onClick={changeVoteNumber}
                      className={classes.cardBodySelect}
                    >
                      <CardContent className={classes.cardSpace}>
                        <Typography className={classes.vote}>
                          <span className={classes.selectedVote}>{eachvote.vote.name}</span>
                        </Typography>
                        <Typography className={classes.candidate}>
                          <span>{eachvote.candidate}</span>
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
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          onClose={dialogClose}
          open={dialogopen}
          fullWidth={true}
          maxWidth="xs"
          PaperProps={{ className: [classes.dialog] }}
        >
          <DialogTitle>
            <div className={classes.textCenter}>
              {props.username}님의 투표 정보입니다.
            </div>
          </DialogTitle>
          <DialogContent>
            <Grid container justify="center">
              {/* <Grid item xs></Grid> */}
              <Grid item xs={"auto"}>
                <p>{props.username}님은</p>
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
                <p>투표를 완료 하시겠습니까?</p>
              </Grid>
              {/* <Grid item xs></Grid> */}
            </Grid>
          </DialogContent>
          <DialogActions className={classes.buttonSpace}>
            <Button
              onClick={props.finishVote}
              variant="contained"
              // size="large"
              color="primary"
              fullWidth={true}
              autoFocus
            >
              확인
            </Button>
            <Button
              onClick={dialogClose}
              variant="contained"
              // size="large"
              color="default"
              fullWidth={true}
              autoFocus
            >
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