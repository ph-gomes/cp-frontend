import React from "react";

import clsx from "clsx";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import EmailIcon from "@material-ui/icons/Email";
import NotificationsIcon from "@material-ui/icons/Notifications";

import userImg from "../assets/Users/IMG_20190726_172757.png";

const useStyles = makeStyles(theme => {
  return {
    menuButton: {
      marginRight: 8
    },
    headerText: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "Capitalize"
    },
    spacer: {
      flex: 1
    },
    appBarIcons: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      "& li": { paddingRight: "24px", margin: "auto" },
      "& a": { color: "#252631", textDecoration: "none" },
      "& a:hover": { color: "orange" }
    },
    userProfile: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#252631",
      fontSize: "14px",
      letterSpacing: "0.2px"
    },
    bigAvatar: {
      margin: 10,
      width: 39,
      height: 39
    }
  };
});
/** Função para gerar a barra superior customizada  */
export default function CustomAppBar(props) {
  /** Estilos internos do component */
  const MainClasses = useStyles();
  /** Recebe dados externos */
  const { open, handleDrawer, classes } = props;
  /** Recebe o item que está selecionado utilizando redux */
  const activeTab = useSelector(state => state.activeTab);

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
      style={{ boxShadow: "0px 1px 0px #DDD" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          className={MainClasses.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={MainClasses.headerText} noWrap>
          {activeTab.text}
        </Typography>
        <div className={MainClasses.spacer} />
        <div>
          <ul className={MainClasses.appBarIcons}>
            <li>
              <a href="/">
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <EmailIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <NotificationsIcon />
              </a>
            </li>
            <li>
              <a href="/">
                <div className={MainClasses.userProfile}>
                  <Avatar
                    alt="Remy Sharp"
                    src={userImg}
                    className={MainClasses.bigAvatar}
                  />
                  Rodolfo Lage
                </div>
              </a>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  );
}
