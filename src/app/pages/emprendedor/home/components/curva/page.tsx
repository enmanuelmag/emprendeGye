import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import style from './style';


export default function page() {
  const classes = style();
  var titulo = { titulo: 'Curva de emprendimiento' };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h5" className={classes.titulo}>
          {titulo.titulo}
        </Typography>


      </CardContent>
    </Card>
  );
}
