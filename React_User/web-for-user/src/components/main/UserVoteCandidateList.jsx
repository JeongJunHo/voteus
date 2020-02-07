import React, { useState, useEffect, Fragment } from 'react';

import {
  makeStyles,
  LinearProgress,
  Grid,
  Paper,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
    // padding: theme.spacing(2),
    "&:hover": {
      boxShadow: "0 4px 20px -6px #1a237e"
    },
    backgroundColor: '#e8eaf6',
  },
  party: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)

  },
  candidate: {
    // paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
    textAlign: "center",
  }
}));

const UserVoteCandidateList = props => {
  const classes = useStyles();

  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true)
    setLoading(false)
  }, [props.candidatelist])

  if (loading === false) {
    return (
      <Fragment>
        <div className={classes.flex}>
         <Grid container spacing={3} className={classes.header}>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paperHeader}>
              <h1>{props.votename} 투표입니다.</h1>
              <h2>후보를 선택해주세요.</h2>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.body}>
          {props.candidatelist[0].map((eachcandidate, i) => {
              const selectCandidate = () => {
                props.result.set(props.votenumber, eachcandidate.code)
                props.setResult(props.result)
                props.setVoteNumber(null)
              }
              
              return (
                <Grid item xs={6} key={eachcandidate.code}>
                  <Card
                    variant="outlined"
                    onClick={selectCandidate}
                    className={classes.cardBody}
                  >
                    <CardContent>
                      <Typography className={classes.party}>
                        <b>기호 {i+1}번</b> {eachcandidate.party}
                      </Typography>
                      <Typography className={classes.candidate}>
                        <b>{eachcandidate.name}</b>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
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

export default UserVoteCandidateList;