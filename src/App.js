import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";
import Footer from "./components/Pages/Footer";

import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => {
  const drawerWidth = 240;
  return {
    root: {
      display: "flex"
    },
    appBar: {
      display: "flex",
      height: "64px",
      backgroundColor: "white",
      color: "rgba(0, 0, 0, 0.87)",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(0, 1),
      height: "64px",
      marginTop: "12px"
    },
    toolbar_logo: {
      width: "100%"
    },
    content: {
      padding: theme.spacing(3)
    },
    mainContent: { width: "100%" },
    floatWindow: {
      top: 0,
      left: 0
    }
  };
});

/** Função principal do aplicativo */
export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const activeTab = useSelector(state => state.activeTab);

  const handleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.root}>
      {/** Renderiza a barra de status */}
      <AppBar classes={classes} open={open} handleDrawer={handleDrawer} />
      {/** Renderiza a barra de lateral */}
      <Drawer classes={classes} open={open} />
      <main className={classes.mainContent}>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          {/** Renderiza o conteúdo principal do item ativo */}
          {activeTab.path}
        </div>
        <Footer />
      </main>
    </div>
  );
}
