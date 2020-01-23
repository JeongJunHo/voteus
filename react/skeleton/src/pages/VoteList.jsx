import React from "react";
import Layout from "../layout/Layout";

import { makeStyles } from "@material-ui/core";

import MaterialTable from "../components/main/MaterialTable";

import Link from "@material-ui/core/Link";
import { ViewContext } from "../context/ViewContext";
import axios from "axios";

const useStyles = makeStyles(theme => ({}));

const VoteList = props => {
  const classes = useStyles();

  const axiosAction = () => {
    axios.post("http://192.168.100.71:5000/getJJ").then(response => {
      console.log(response);
    });
  };

  return (
    <ViewContext.Provider value={{}}>
      <Layout>
        <MaterialTable />
        <button onClick={axiosAction}>axiosTest</button>
      </Layout>
    </ViewContext.Provider>
  );
};

export default VoteList;
