import React from "react";
import Layout from "../layout/Layout";

import { makeStyles } from "@material-ui/core";

import VoteTable from "../components/vote/VoteTable";

import { ViewContext } from "../context/ViewContext";

const useStyles = makeStyles(theme => ({}));

const VoteList = props => {
  const classes = useStyles();

  return (
    <ViewContext.Provider value={{}}>
      <Layout>
        <VoteTable />
      </Layout>
    </ViewContext.Provider>
  );
};

export default VoteList;
