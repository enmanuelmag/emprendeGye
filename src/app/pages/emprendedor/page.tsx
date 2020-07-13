import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { AppBar, Toolbar, Typography, Link, Grid } from '@material-ui/core';
import imagePath from './assets/logobarr.svg';
import style from './style';
import InputAsync from './components/inputAsync';

export default function DenseAppBar() {
  const classes = style();
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  return (
    <AppBar className={classes.barra} position="static">
      <Toolbar variant="dense">
        <Grid container className={classes.root}>
          <Grid item lg={1}>
            <img className={classes.img} src={imagePath} alt="EmprendeGye" />
          </Grid>
          <Grid item lg={11} className={classes.divLinkR}>
            <Grid container>
              <Grid item lg={4} className={classes.searchBar}>
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
              <Grid item lg={8} className={classes.tabs}>
                <Typography>
                  <Link
                    className={classes.link}
                    href="/emprendedor/quienes_somos"
                  >
                    ¿Quiénes Somos?
                  </Link>
                  <Link className={classes.link} href="/emprendedor/ecosistema">
                    Ecosistema
                  </Link>

                  <Link
                    className={classes.link}
                    href="./aprendizaje"
                    onClick={preventDefault}
                  >
                    Aprendizaje
                  </Link>

                  <Link
                    className={classes.link}
                    href="/emprendedor/herramientas"
                  >
                    Herramientas
                  </Link>
                  <Link
                    className={classes.link}
                    href="./notas"
                    onClick={preventDefault}
                  >
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
