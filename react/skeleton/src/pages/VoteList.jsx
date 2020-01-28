import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";

import { makeStyles } from "@material-ui/core";

import MaterialTable from "../components/main/MaterialTable";

import Link from "@material-ui/core/Link";
import { ViewContext } from "../context/ViewContext";
import axios from "axios";

const useStyles = makeStyles(theme => ({}));

const VoteList = props => {
  const classes = useStyles();

  const testData = { test: "test123", test2: "test4321" };

  return (
    <ViewContext.Provider value={{}}>
      <Layout>
        <MaterialTable testData={testData} />
      </Layout>
    </ViewContext.Provider>
  );
};

export default VoteList;
