import React, { useContext } from "react";
import {
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { CommonContext } from "../context/CommonContext";
import Drawer from "./Drawer";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  appBar: {
    // padding: `0 calc(10px + 2vw)`
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    cursor: "pointer"
  }
}));

const Header = props => {
  const classes = useStyles();
  const {} = useContext(CommonContext);

  const onClickDrawerOpenHandler = () => {
    // TemporaryDrawer.toggleDrawer("left", true);
  };

  const onClickSignInDialogOpenHandler = () => {
    // alert("open signIn Dialog");
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onClickDrawerOpenHandler}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton> */}
        <Drawer />
        <Typography variant="h6" className={classes.title}>
          Vote Admin ver.1
        </Typography>
        <Link href="/" color="inherit">
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={onClickSignInDialogOpenHandler}
            color="inherit"
            size="medium"
          >
            <AccountCircle />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
