import React from "react";
import Layout from "../layout/Layout";

import VoteGridList from "../components/main/VoteGridList";
import VoteGridTitle from "../components/main/VoteGridTitle";

import { makeStyles } from "@material-ui/core";

import { CommonContext } from "../context/CommonContext";
import { ViewContext } from "../context/ViewContext";

const useStyles = makeStyles(theme => ({}));

const VoteMain = props => {
  const classes = useStyles();
  const index = 0;

  return (
    <ViewContext.Provider value={{}}>
      <Layout>
        <VoteGridTitle
          item={{
            url: `https://picsum.photos/id/50/200/300.webp`,
            title: `VoteOn`,
            subtitle: `Today votes`
          }}
        />
        <VoteGridList />
      </Layout>
    </ViewContext.Provider>
  );
};

export default VoteMain;
