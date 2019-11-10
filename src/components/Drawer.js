import React from "react";
import clsx from "clsx";

import { Drawer, Link, List } from "@material-ui/core";
import MainListItems from "./listItems";

import logo from "../assets/Logo.png";

/** Função para gerar a barra lateral customizada  */
export default function CustomDrawer(props) {
  /** Recebe dados externos */
  const { classes, open } = props;
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <Link href="/">
          <img className={classes.toolbar_logo} src={logo} alt="Logo" />
        </Link>
      </div>
      <List>
        {/** Renderiza a lista de itens presentes no menu lateral */}
        <MainListItems />
      </List>
    </Drawer>
  );
}
