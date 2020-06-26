import React from 'react';
import style from './style';
import {Button,Typography} from '@material-ui/core';;

export default function ListButtom() {
  const classes = style();

  return (
    <div className={classes.root}>
            <div className={classes.typography}>
                <Typography variant='h5'>Herramienta</Typography>
            </div>
      
      <Button variant="outlined" size="large" color="primary">
        Análisis de Ventas
      </Button>

      <Button variant="outlined" size="large" color="secondary">
        Tir/Van
      </Button>

      <Button variant="outlined" size="large" color="primary">
        Escenarios de Predicciones
      </Button>

      <Button variant="outlined" size="large" color="secondary" >
        Opiniones de Clientes.
      </Button>
     
    </div>
  );
}