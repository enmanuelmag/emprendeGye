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
          <Grid container justify="center" spacing={3}>
            <Grid item xs={10} md={3}>
              <ColorButton className={classes.button}>Entidad</ColorButton>
            </Grid>
            <Grid item xs={10} md={3}>
              <ColorButton href="/login" className={classes.button}>
                Emprendedor
              </ColorButton>
            </Grid>
            <Grid item xs={10} md={3}>
              <ColorButton
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Mentor
              </ColorButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
