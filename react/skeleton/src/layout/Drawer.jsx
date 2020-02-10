import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          {
            name: "투표 관리",
            url: "/VoteList"
          }
        ].map((obj, index) => (
          <Link key={index} href={obj.url} color="inherit">
            <ListItem button key={obj.name}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            name: "정당 관리",
            url: "/PartyList"
          },
          {
            name: "지역구 관리",
            url: "/AreaList"
          },
          {
            name: "선거 분류 관리",
            url: "/MainPartList"
          },
          {
            name: "투표자 등록",
            url: "/VoterList"
          }
        ].map((obj, index) => (
          <Link key={index} href={obj.url} color="inherit">
            <ListItem button key={obj.name}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[
          {
            name: "통계1",
            url: "/"
          },
          {
            name: "통계2",
            url: "/"
          }
        ].map((obj, index) => (
          <Link key={index} href={obj.url} color="inherit">
            <ListItem button key={obj.name}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={obj.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer("left", true)}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      {/* <Button onClick={toggleDrawer("left", true)}>Open Left</Button> */}
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
