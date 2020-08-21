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
                <Paper className={classes.root} variant="outlined">
                        <Typography variant="h5">
                                {initData.saludo}
                        </Typography>
                        <Typography variant="h5">
                                {initData.hora}
                        </Typography>
                        <Typography className={classes.typographyBody}
                                    variant="h6">
                                {initData.frase}
                        </Typography>
                </Paper>

        )
}
