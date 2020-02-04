import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserHeader from "../layout/UserHeader";
import UserAuthBody from "../layout/UserAuthBody";
import UserFooter from "../layout/UserFooter";

const useStyles = makeStyles(theme => ({}));

const UserAuthentication = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <UserHeader />
      <UserAuthBody />
      <UserFooter />
    </Fragment>
  );
};

export default UserAuthentication;
