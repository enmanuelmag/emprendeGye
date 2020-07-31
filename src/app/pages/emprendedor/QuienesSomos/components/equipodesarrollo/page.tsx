import React from 'react';
import style from "./style";
import {Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default function EquipodeDesarrollo() {
  const classes = style();

  return (
    <div className={classes.contenedor}>
    <Card className={classes.root}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={6}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="assets/foto.jpg"
              title="Integrante1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Diana Molina Torres
        </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Estudiante de Ingeniería en Computación
          </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Facultad : FIEC
          </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Edad : 21 años
          </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Ciudad : Guayaquil
          </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Correo : dianmoli@espol.edu.ec
          </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
              Fecha nacimiento :  14/ Agosto/ 1998
              </Typography>
            </CardContent>
          </CardActionArea>
    </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="assets/josue.jpg"
              title="Integrante1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Josue Cobos Salvador
  </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Estudiante de Ingeniería en Computación
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Facultad : FIEC
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Edad : 21 años
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Ciudad : Guayaquil
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Correo : jcoboss@espol.edu.ec
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Fecha nacimiento :  28/ Noviembre/ 1998
    </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image="assets/paulette.jpg"
              title="Integrante1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Joan Paulette Vásquez
  </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Estudiante de Ingeniería en Computación
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Facultad : FIEC
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Edad : 21 años
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Ciudad : Guayaquil
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Correo : jpvasque@espol.edu.ec
    </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Fecha nacimiento :  00/ Noviembre/ 1998
    </Typography>
            </CardContent>
          </CardActionArea>
        </Grid>


        <Grid item xs={12} md={6} lg={6}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="250"
            image="assets/Enmanuel.jpg"
            title="Integrante1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Enmanuel Magallanes 
  </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Estudiante de Ingeniería en Computación
    </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Facultad : FIEC
    </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Edad : 20 años
    </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Ciudad : Manabí
    </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Correo : fmagalla@espol.edu.ec
    </Typography>
            <Typography variant="body2" color="textPrimary" component="p">
              Fecha nacimiento :  15/ Febrero/ 1999
    </Typography>
          </CardContent>
        </CardActionArea>
        </Grid>
</Grid>
</Card>
</div>
  )
}