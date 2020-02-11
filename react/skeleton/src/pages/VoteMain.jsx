import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

import Chart from "../components/main/Chart";
import ActiveVoteList from "../components/main/ActiveVoteList";

import { makeStyles } from "@material-ui/core";

import { ViewContext } from "../context/ViewContext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  mh_487: {
    minHeight: 487
  }
}));

const VoteMain = props => {
  const classes = useStyles();

  const [voteData, setVoteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = React.useState([]);
  console.log(selected);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "http://localhost:8080/api/vote/getVoteActiveList"
        );
        setVoteData(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <LinearProgress />
      </>
    );
  } else {
    return (
      <ViewContext.Provider value={{}}>
        <Layout>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Chart selected={selected} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={[classes.paper, classes.mh_487].join(" ")}>
                <ActiveVoteList
                  list={voteData}
                  setSelected={setSelected}
                  selected={selected}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </Layout>
      </ViewContext.Provider>
    );
  }
};

export default VoteMain;
