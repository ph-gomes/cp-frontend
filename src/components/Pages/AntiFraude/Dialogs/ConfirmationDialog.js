import React from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  valid: {
    width: "100%",
    height: "15px",
    backgroundColor: "#2EBD41"
  },
  invalid: {
    width: "100%",
    height: "15px",
    backgroundColor: "#FF2B2B"
  }
}));

/** Retorna o dialogo de verificação */
export default function VerificationDialog(props) {
  const { onClose, open, submit } = props;

  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      aria-describedby="simple-dialog-description"
      open={open}
    >
      <div
        className={
          props.class === "fraudulenta" ? classes.invalid : classes.valid
        }
      />
      <DialogTitle id="simple-dialog-title">Venda {props.class}</DialogTitle>
      <DialogContent>
        {props.class === "fraudulenta" ? (
          <DialogContentText id="simple-dialog-description">
            Fala revendedor, você validou essa venda como Fraudulenta, no caso
            ela nao gera pontos para o cliente final.
          </DialogContentText>
        ) : (
          <DialogContentText id="simple-dialog-description">
            Fala revendedor, você validou essa venda como Fiel, isso quer dizer
            que ela atua como uma venda normal e a pontuação é gerada para o
            cliente final
          </DialogContentText>
        )}
      </DialogContent>
      {/** Caso o usuário cancele a operação o dialogo é fechado,
      caso contrario é executada a função de submit */}
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Não
        </Button>
        <Button color="primary" onClick={submit}>
          Sim, Desejo
        </Button>
      </DialogActions>
    </Dialog>
  );
}
