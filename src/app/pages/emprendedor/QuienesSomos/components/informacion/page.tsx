import React from 'react';
import style from "./style";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default function page() {
  const classes = style();

  return (
    <div className={classes.root}>
          <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
          ¿Quiénes Somos?
          </Typography>

          <Typography className={classes.info} variant="body2" component="p">
            Nuestra plataforma cuenta con herramientas intuitivas que permitirán al emprendedor gestionar y
            administrar su negocio, socializar con personal experimentado, adquirir conocimientos que
            le permita establecer un buen plan de negocio y definir estrategias
            
            La plataforma está dirigida a los emprendedores guayaquileños que recién inician el
            emprendimiento, se encuentran en la fase de startup o poseen ya pequeñas empresas que
            necesitan financiamiento y apoyo técnico para escalar
          </Typography>

          
    </div>
  );
}