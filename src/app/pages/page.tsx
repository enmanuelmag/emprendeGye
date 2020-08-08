import React from 'react';
import imagePathfooter from './emprendedor/assets/logodark.svg';
import { Grid } from '@material-ui/core';
import style from './style';
import { ColorButton } from './style';
export default function home() {
  const classes = style();

  return (
    <div className={classes.app}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img className={classes.imagen} src={imagePathfooter} alt="Logo" />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={4}>
            <Grid item xs={7} md={3}>
                <ColorButton className={classes.button}
                             variant='contained'>
                    <Grid container>
                        <Grid item xs={12}>
                            <img className={classes.imagen} src='emprendedor/assets/initialPage/entidad.jpg' alt="entidad" />
                        </Grid>
                        <Grid item xs={12}>
                            Entidad
                        </Grid>
                    </Grid>
                </ColorButton>
            </Grid>
            <Grid item xs={7} md={3}>
                <ColorButton href="/login" className={classes.button}
                           variant='contained'>
                    <Grid container>
                        <Grid item xs={12}>
                            <img className={classes.imagen} src='emprendedor/assets/initialPage/emprendedores.jpeg' alt="emprendedor" />
                        </Grid>
                        <Grid item xs={12}>
                            Emprendedor
                        </Grid>
                    </Grid>
                </ColorButton>
            </Grid>
            <Grid item xs={7} md={3}>
                <ColorButton
                className={classes.button}
                variant="contained"
                >
                    <Grid container>
                        <Grid item xs={12}>
                            <img className={classes.imagen} src='emprendedor/assets/initialPage/mentor.jpg' alt="mentor" />
                        </Grid>
                        <Grid item xs={12}>
                            Mentor
                        </Grid>
                    </Grid>
                </ColorButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
