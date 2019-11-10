import React from "react";

import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "../../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries } from "react-vis";

/** Dados dos gráficos */
const data1 = [
  { x: 0, y: 5 },
  { x: 1, y: 6 },
  { x: 2, y: 3 },
  { x: 3, y: 7 },
  { x: 4, y: 10 }
];

const data2 = [
  { x: 0, y: 5 },
  { x: 1, y: 5.1 },
  { x: 2, y: 5.2 },
  { x: 3, y: 5.2 },
  { x: 4, y: 5.2 },
  { x: 5, y: 5.2 },
  { x: 6, y: 5.3 },
  { x: 7, y: 5.6 }
];
const data3 = [
  { x: 0, y: 6.6 },
  { x: 1, y: 6.6 },
  { x: 2, y: 6.5 },
  { x: 3, y: 6.1 },
  { x: 4, y: 6.1 },
  { x: 5, y: 6.2 },
  { x: 6, y: 6.3 },
  { x: 7, y: 6.3 }
];

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    height: "80px"
  }
}));

/** Retorna um conjunto de 3 gráficos */
export default function Charts() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={4}>
        <Paper className={classes.paper} justify="left">
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5">R$124.800</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Vendas em débito
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <XYPlot height={65} width={150}>
                <LineSeries data={data1} color="#6DD230" />
              </XYPlot>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper} justify="left">
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5">R$56.400</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Vendas em crédito
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <XYPlot height={65} width={150}>
                <LineSeries data={data2} color="#FFAB2B" />
              </XYPlot>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper} justify="left">
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h5">R$1.700</Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Fraudes confirmadas
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <XYPlot height={65} width={150}>
                <LineSeries data={data3} color="#FE4D97" />
              </XYPlot>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
