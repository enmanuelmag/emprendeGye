import React from 'react';
import imagePathfooter from './emprendedor/assets/logodark.svg';
import { Grid, ButtonBase, Typography } from '@material-ui/core';
import style from './style';

const images = [
  {
    title: 'Entidad',
    url: '',
  },
  {
    title: 'Emprendedor',
    url: 'login',
  },
  {
    title: 'Mentor',
    url: '',
  },
];

export default function home() {
  const classes = style();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={3}
      className={classes.app}
    >
      <Grid item xs={10} md={6} lg={5}>
        <img src={imagePathfooter} alt="Logo" />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {images.map((image) => (
            <Grid item xs={10} lg={3}>
              <ButtonBase
                focusRipple
                href={image.url}
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundColor: '#162d6d',
                  }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {image.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
