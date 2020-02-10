import React, { useContext, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import TypeContext from "../context/TypeContext";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

const UserHeader = props => {
  const classes = useStyles();

  const type = useContext(TypeContext);
  
  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {type === 'auth' ? (
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/"
                style={{visibility: 'hidden'}}
              >
                <HomeRoundedIcon />
              </IconButton>
            ) : (
              null
            )}
            <Typography variant="h6" className={classes.title}>
              전자투표시스템
            </Typography>
            <div>
              {type === 'auth' ? (
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  href="/"
                >
                  <HomeRoundedIcon />
                </IconButton>
              ) : (
                null
              )}
              {/* <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                href="/"
              >
                <HomeRoundedIcon />
              </IconButton> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
};

export default UserHeader;
