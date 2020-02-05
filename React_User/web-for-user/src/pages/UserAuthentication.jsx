import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserHeader from "../layout/UserHeader";
import UserAuthBody from "../layout/UserAuthBody";
import UserFooter from "../layout/UserFooter";
import FlexPaperTemplate from "../components/main/FlexPaperTemplate";

const useStyles = makeStyles(theme => ({}));

const UserAuthentication = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <UserHeader />
      <FlexPaperTemplate>
        <UserAuthBody />
      </FlexPaperTemplate>
      <UserFooter />
    </Fragment>
  );
};

export default UserAuthentication;
