import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import style from './style';

const initData = {
  saludo: 'Buenos dias, ',
  frase: 'Existe el mañana por alguna razón',
  hora: '21:04:56',
};

export default function home() {
  const classes = style();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.typographyBody}>
        {initData.saludo}
      </Typography>
      <Typography className={classes.typographyBody}>
        {initData.hora}
      </Typography>
      <Typography className={classes.typographyBody}>
        {initData.frase}
      </Typography>
    </Paper>
  );
}
