import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  listItem: {
    height: "64px"
  },
  listText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    letterSpacing: "0.3px",
    textTransform: "uppercase",
    color: "#252631"
  },
  activeListItem: {
    padding: 0,
    background: "#F8FAFB"
  },
  activeField: {
    display: "flex",
    flexDirection: "column",
    background: "none",
    border: "none",
    height: "100%",
    padding: 0,
    paddingRight: "14px"
  },
  activeFieldLine: {
    width: "2px",
    height: "100%",
    background: "#F26522"
  }
}));

/** Função para gerar a lista de itens do menu lateral  */
export default function MainListItems(props) {
  const classes = useStyles();

  /** Utiliza o redux para receber a lista de itens a serem mostradas */
  const menuItems = useSelector(state => state.data);
  /** Utiliza o redux para receber o item ativo */
  const activeTab = useSelector(state => state.activeTab);
  const dispatch = useDispatch();

  /** Utiliza o dispatch para atualiza o item ativo */
  function handleIconClick(tab) {
    dispatch({ type: "SELECT_ITEM", tab });
  }

  return (
    <>
      {menuItems.map(item => {
        const active = item.tabName === activeTab.tabName;
        return (
          <ListItem
            className={clsx(classes.listItem, {
              [classes.activeListItem]: active
            })}
            button
            key={item.tabName}
            onClick={() => handleIconClick(item)}
          >
            {active && (
              <span className={classes.activeField}>
                <div className={classes.activeFieldLine}></div>
              </span>
            )}
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography className={classes.listText}>
                  {item.text}
                </Typography>
              }
            />
          </ListItem>
        );
      })}
    </>
  );
}
