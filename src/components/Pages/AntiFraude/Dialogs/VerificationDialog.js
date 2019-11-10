import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  List,
  ListItem,
  LinearProgress,
  Typography,
  Grid
} from "@material-ui/core";

import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
import ConfirmationDialog from "./ConfirmationDialog";

const useStyles = makeStyles(theme => ({
  root: {
    flex: 1
  },
  margin: {
    margin: "8px"
  }
}));
function LinearProgressBar(props) {
  const classes = useStyles();

  const BorderLinearProgress = withStyles({
    root: {
      height: 6,
      borderRadius: 50,
      backgroundColor: lighten("#E2E7EE", 0.5)
    },
    bar: {
      borderRadius: 50,
      backgroundColor: props.color
    }
  })(LinearProgress);

  return (
    <ListItem onClick={() => props.click("")}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography variant="subtitle1">{props.title}:</Typography>
        </Grid>
        <Grid item xs={8}>
          <BorderLinearProgress
            className={classes.margin}
            variant="determinate"
            color="secondary"
            value={parseInt(props.percent)}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography variant="subtitle2">{props.percent}%</Typography>
        </Grid>
      </Grid>
    </ListItem>
  );
}

const fields = [
  { title: "Fraudes", percent: "62", color: "#FF2B2B" },
  { title: "Erro do frentista", percent: "32", color: "#F7BF47" },
  { title: "Fiel", percent: "9", color: "#6DD230" }
];

/** Retorna o dialogo de verificação */
export default function VerificationDialog(props) {
  const { onClose, open } = props;

  const [openSubW, setOpenSubW] = useState(false);

  const [value, setValue] = useState({ id: props.id, class: "fraude" });

  const handleClose = () => {
    setOpenSubW(false);
    onClose();
  };

  const handleCloseSubW = () => {
    setOpenSubW(false);
  };

  const handleClick = val => () => {
    setValue({ ...value, class: val });
    setOpenSubW(true);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      aria-describedby="simple-dialog-description"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Resposta do algoritmo</DialogTitle>
      <DialogContent>
        <DialogContentText id="simple-dialog-description">
          A resposta dada pelo nosso algoritimo sobre essa venda é dada pelos
          indicadores a baixo, além de analisar eles, entre em contato com os
          frentistas e tire suas proprias conclusões.
        </DialogContentText>
        <List>
          {fields.map((data, index) => (
            <LinearProgressBar {...data} key={index} />
          ))}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick("fraudulenta")} color="secondary">
          Venda Fraudulenta
        </Button>
        <Button onClick={handleClick("fiel")} color="primary">
          Venda Fiel
        </Button>
        {/** Renderiza o dialogo de confirmação ao clicar em um dos botões */}
        <ConfirmationDialog
          {...value}
          open={openSubW}
          onClose={handleCloseSubW}
          submit={onClose}
        />
      </DialogActions>
    </Dialog>
  );
}
