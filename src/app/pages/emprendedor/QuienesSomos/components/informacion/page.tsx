import React from 'react';
import style from "./style";
import Typography from '@material-ui/core/Typography';

export default function page() {
  const classes = style();

  return (
    <div className={classes.root}>
          <Typography className={classes.frases1} variant='h5'>
				  ¿Quiénes Somos?
						</Typography>

          <Typography className={classes.info} variant="body1">
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