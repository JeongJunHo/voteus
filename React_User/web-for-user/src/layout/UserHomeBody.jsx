import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  flex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
    width: "100%",
    position: "absolute"
  }
});

const style = {};

const UserHomeBody = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <Link href="/user-auth" color="inherit">
        <div className={classes.flex}>
          <h1 className>전자투표시스템</h1>
          <h1>화면을 터치해주세요.</h1>
        </div>
      </Link>
    </Fragment>
  );
};

export default UserHomeBody;
