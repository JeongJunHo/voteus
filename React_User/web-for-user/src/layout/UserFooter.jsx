import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%"
  }
}));

const UserFooter = props => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.flex}>
        <p>Copyright © 25+2d corp. all rights reserved</p>
      </div>
    </Fragment>
  );
};

export default UserFooter;
