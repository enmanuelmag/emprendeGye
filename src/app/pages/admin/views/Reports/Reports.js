import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Grid, Typography, Card, Container, Button } from '@material-ui/core';
import { agrupar, filtrarPorFechas, tabularGrupos } from "./algoritmo"
import { useSelector, useDispatch } from 'react-redux';
import {
  emprendimiento as emprendimientoSelector,
  ganancias as gananciasSelector
} from '../../../../../redux/selectors';
import { getEmprendimiento } from '../../../../../redux/actions/emprendimiento';
import { getGanancias } from '../../../../../redux/actions/ganancias';
import styles from "./styles";

export default function Reportes() {

  const classes = styles();
  const dispatch = useDispatch();
  const emprendimientos = useSelector((state) => emprendimientoSelector(state));
  const ganancias = useSelector((state) => gananciasSelector(state));
  const [inicio, setInicio] = useState("2019-8-05");
  const [final, setFinal] = useState("2019-12-05");
  const [agrupados, setAgrupados] = useState({});
  //const [filPorFecha, setFil] = useState()
  const [tab, setTab] = useState([]);
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  /*useEffect(() => {
    if (!ganancias) {
      dispatch(getGanancias())
    }
  }, [ganancias, inicio, final, dispatch]);
*/
  useEffect(() => {
    if (!emprendimientos) {
      dispatch(getEmprendimiento())
    } else {
      setAgrupados(agrupar(emprendimientos));
    }
  }, [emprendimientos, dispatch]);

  const handleInicio = (event) => {
    if (event.type === "change") {
      setInicio(event.target.value)
      dispatch(getGanancias({inicio, fin: final}))
    }
  }
  const handleFinal = (event) => {
    if (event.type === "change") {
      setFinal(event.target.value);
      dispatch(getGanancias({inicio, fin: final}))
    }
  }

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  const handleButtonClick = () => {
    setTab(tabularGrupos(agrupados, ganancias ));
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      setTimeout(()=>{
        setSuccess(true);
        setLoading(false);},2000)
      
    }
  };
  
  
  
  return (
    <Grid container className={classes.contPrincipal} spacing={3}>

      <Grid container justify="center"
        alignItems="center" item>
        <Grid item md={12} xs={12} >
          <Typography className={classes.title} variant='h5'>
            REPORTES DE GANANCIAS POR TIPO DE EMPRENDIMIENTO
          </Typography>
        </Grid>

        <Grid item md={5} xs={5} container justify="center"
          alignItems="center">
          <TextField
            id="date"
            label="Fecha de inicio"
            type="date"
            //defaultValue={new Date(inicio).toLocaleDateString()}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleInicio}
          />
        </Grid>
        <Grid item md={5} xs={5} container justify="center"
          alignItems="center">
          <TextField
            id="date"
            label="Fecha de fin"
            type="date"
            //defaultValue={new Date(final).toLocaleDateString()}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleFinal}
          />
        </Grid>
        <Grid item md={2} xs={2} container justify="center"
          alignItems="center">
          
          <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Generar Reporte
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
        </Grid>
      </Grid>

      <Grid
        container
        item
        spacing={3}
        justify="center"
        alignItems="flex-start"
        className={classes.gridGraphic}
      >
        <Grid item md={6} xs={6}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Sector Económico</TableCell>
                  <TableCell align="left">Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(tab) ? tab.map((row) => (
                  <TableRow key={row.grupo}>
                    <TableCell component="th" scope="row">
                      {row.grupo}
                    </TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </TableRow>
                )) : <></>
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

    </Grid>
  );

}
