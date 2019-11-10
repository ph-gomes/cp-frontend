import React, { useState } from "react";

import { Typography, Grid, Fab } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import aprCard from "../../../assets/Card/apv.svg";
import rejCard from "../../../assets/Card/rej.svg";
import masterCard from "../../../assets/Card/master.svg";
import visaCard from "../../../assets/Card/visa.svg";

import VerificationDialog from "./Dialogs/VerificationDialog";

const card = {
  fiel: aprCard,
  fraude: rejCard,
  master: masterCard,
  visa: visaCard
};

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    paddingLeft: "18px"
  },
  fab: {
    margin: theme.spacing(1),
    backgroundColor: "#FFF",
    boxShadow: "0 0 0 0",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    fontSize: "16px",
    alignContent: "center"
  }
}));

/** Retorna a estrutura de cada venda */
export default function Venda(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid className={classes.card} container alignItems="center">
      <Grid item xs={4}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={3}>
            {/** Renderiza uma imagem específica dependendo do status e do tipo de cartao */}
            <img
              src={
                props.data.status === "A validar"
                  ? card[props.data.card.flag]
                  : props.data.status === "Fiel"
                  ? card.fiel
                  : card.fraude
              }
              alt="Compra Aprovada"
            />
          </Grid>
          {/** Renderiza uma mensagem específica dependendo do status */}
          <Grid item xs={9}>
            <Typography variant="subtitle1" color={"textPrimary"}>
              {props.data.status === "A validar"
                ? props.data.card.number
                : props.data.status === "Fiel"
                ? "Venda Fiel"
                : "Venda Fraudulenta"}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {props.data.status === "A validar"
                ? "Numero do cartão"
                : props.data.name}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle1">R${props.data.val}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Valor da compra
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{props.data.gas.l} L</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {props.data.gas.type}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">{props.data.date}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Dia
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="subtitle1">{props.data.status}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Status
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Fab
          aria-label="add"
          size="small"
          className={classes.fab}
          onClick={handleClickOpen}
        >
          ...
        </Fab>
        {/** Renderiza o dialogo de verificação ao clicar no botão */}
        <VerificationDialog
          id={"idDaVenda"}
          open={open}
          onClose={handleClose}
        />
      </Grid>
    </Grid>
  );
}
