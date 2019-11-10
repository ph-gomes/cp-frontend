import React from "react";

import { Typography, Paper } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Charts from "./Charts";
import Venda from "./Venda";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: "8px",
    paddingBottom: "8px",
    color: theme.palette.text.secondary
  },
  paper: {
    padding: "16px"
  }
}));

const venda = {
  data: [
    {
      card: { number: "3210 **** **** 4008", flag: "visa" },
      name: "Nome",
      val: "88,20",
      gas: { l: "18,375", type: "Gasolina" },
      date: "22/06",
      status: "A validar"
    },
    {
      card: { number: "4008 **** **** 9464", flag: "master" },
      name: "Nome",
      val: "66,40",
      gas: { l: "21,419", type: "Diesel" },
      date: "12/07",
      status: "A validar"
    },
    {
      card: { number: "3344 **** **** 9018", flag: "visa" },
      name: "Nome",
      val: "32,40",
      gas: { l: "9,000", type: "Etanol" },
      date: "18/08",
      status: "A validar"
    },
    {
      card: { number: "4008 **** **** 9464", flag: "master" },
      name: "Pedro Vallese",
      val: "576,00",
      gas: { l: "120,000", type: "Gasolina" },
      date: "01/09",
      status: "Fraude"
    },
    {
      card: { number: "4008 **** **** 9464", flag: "master" },
      name: "Brenner Batista",
      val: "119.040",
      gas: { l: "24,800", type: "Gasolina" },
      date: "14/07",
      status: "Fiel"
    },
    {
      card: { number: "4008 **** **** 9464", flag: "master" },
      name: "Thulio Ricomini",
      val: "312.400",
      gas: { l: "65,000", type: "Gasolina" },
      date: "22/07",
      status: "Fiel"
    }
  ]
};

/** Retorna o conteúdo principal da página Anti-Fraude */
export default function AntiFraude(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        {/** Renderiza os gráficos no topo da página */}
        <Charts />
      </div>
      <div className={classes.root}>
        <Typography variant="subtitle1">Analise de vendas</Typography>
        <Paper className={classes.paper}>
          {/** Renderiza as vendas com o status "A validar" */}
          {venda.data
            .filter(venda => venda.status === "A validar")
            .map((venda, index) => (
              <Venda data={venda} key={index} />
            ))}
        </Paper>
      </div>
      <div className={classes.root}>
        <Typography variant="subtitle1">
          Vendas fraudulentas confirmadas
        </Typography>
        <Paper className={classes.paper}>
          {/** Renderiza as vendas com o status "Fraude" */}
          {venda.data
            .filter(venda => venda.status === "Fraude")
            .map((venda, index) => (
              <Venda data={venda} key={index} />
            ))}
        </Paper>
      </div>
      <div className={classes.root}>
        <Typography variant="subtitle1">Vendas validadas fieis</Typography>
        <Paper className={classes.paper}>
          {/** Renderiza as vendas com o status "Fiel" */}
          {venda.data
            .filter(venda => venda.status === "Fiel")
            .map((venda, index) => (
              <Venda data={venda} key={index} />
            ))}
        </Paper>
      </div>
    </div>
  );
}
