import React from 'react';
import Image from './image'
import { Card, CardContent, Typography } from '@material-ui/core';
import style from './style';

export default function fe(props) {
  const classes = style();
  var titulo = { titulo: 'Curva de emprendimiento' };

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.content}>
        <Typography variant="h5" className={classes.titulo}>
          {titulo.titulo}
        </Typography>
        <Image/>	
    </CardContent>
		</Card>
	);
}
