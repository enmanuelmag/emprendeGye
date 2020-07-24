import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { AppBar, Toolbar, Typography, Link, Grid, CardActionArea } from '@material-ui/core';
import imagePath from './assets/logobarr.svg';
import Informacion from './informacion'
import style from './style';

export default function DenseAppBar() {
  const classes = style();
//   const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <AppBar className={classes.barra} position="static">
      <Toolbar variant="dense">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item lg={1}>
            <CardActionArea href="/emprendedor/home">
              <img className={classes.img} src={imagePath} alt="EmprendeGye" />
            </CardActionArea>
          </Grid>
          <Grid item lg={11} className={classes.divLinkR}>
            <Grid container>
              <Grid item lg={3} className={classes.searchBar}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Buscar..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </div>
              </Grid>
              <Grid item lg={9} className={classes.tabs}>
                <Typography>
                  
                  <Link className={classes.link} >
                    <Informacion />
                  </Link>

                 <Link className={classes.link} href="/emprendedor/ecosistema">
                    Ecosistema
                  </Link>

                  <Link
                    className={classes.link}
                    href="/emprendedor/aprendizaje"
                  >
                    Aprendizaje
                  </Link>

                  <Link
                    className={classes.link}
                    href="/emprendedor/herramientas"
                  >
                    Herramientas
                  </Link>
                  <Link className={classes.link} href="/emprendedor/notas">
                    Notas
                  </Link>

                  <Link className={classes.link} href="/emprendedor/cuenta">
                    Cuenta
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
