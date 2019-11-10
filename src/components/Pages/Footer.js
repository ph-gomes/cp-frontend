import React from "react";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    display: "flex",
    flexDirection: "colum",
    height: 62,
    padding: "24px 16px",
    color: "#98A9BC",
    fontSize: "14px",
    backgroundColor: "#FFF"
  },
  spacer: { flexGrow: 1 }
}));

/** Retorna o footer da página */
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      &copy; 2019 - ClubPetro - Todos os direitos reservados.
      <div className={classes.spacer} />
      Sobre ClubPetro
    </footer>
  );
}
