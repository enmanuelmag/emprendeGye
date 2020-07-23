import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Grid,
  CardActionArea,
  SwipeableDrawer,
  List,
  ListItem,
  Collapse,
} from '@material-ui/core';
import imagePath from './assets/logobarr.svg';
import Informacion from './informacion';
import style from './style';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function DenseAppBar() {
  const classes = style();
  const [display, setDisplay] = useState(true);
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (display) {
      if (window.innerWidth <= 1279) {
        setDrawerActivate(true);
      }

      window.addEventListener('resize', () => {
        if (window.innerWidth <= 1279) {
          setDrawerActivate(true);
        } else {
          setDrawerActivate(false);
        }
      });
      setDisplay(false);
    }
  }, [setDrawerActivate, setDisplay, display]);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setDrawer(false);
    setOpen(true);
  };

  const createDrawer = () => {
    return (
      <div>
        <AppBar className={classes.barra} position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <MenuIcon
                className={classes.sideBarIcon}
                onClick={() => {
                  setDrawer(true);
                }}
              />
              <Typography color="inherit" variant="body1">
                EmprendeGye
              </Typography>
              <Typography color="inherit" variant="body1"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
          open={drawer}
          onClose={() => {
            setDrawer(false);
            setOpen(false);
          }}
          onOpen={() => {
            setDrawer(true);
          }}
        >
          <div tabIndex={0} role="button">
            <List className={classes.list}>
              <ListItem key={1} button divider onClick={handleClick}>
                <Link className={classes.link}>Información</Link>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem key={1} button divider>
                    <Link
                      href="/emprendedor/que_hacemos"
                      className={[classes.link, classes.nested].join(' ')}
                      onClick={closeDrawer}
                      onKeyDown={closeDrawer}
                    >
                      ¿Que hacemos?
                    </Link>
                  </ListItem>
                  <ListItem key={1} button divider>
                    <Link
                      href="/emprendedor/quienes_somos"
                      className={[classes.link, classes.nested].join(' ')}
                      onClick={closeDrawer}
                      onKeyDown={closeDrawer}
                    >
                      ¿Quiénes Somos?
                    </Link>
                  </ListItem>
                  <ListItem key={1} button divider>
                    <Link
                      href="/emprendedor/contactanos"
                      className={[classes.link, classes.nested].join(' ')}
                      onClick={closeDrawer}
                      onKeyDown={closeDrawer}
                    >
                      Contáctanos
                    </Link>
                  </ListItem>
                  <ListItem key={1} button divider>
                    <Link
                      href="/emprendedor/noticias"
                      className={[classes.link, classes.nested].join(' ')}
                      onClick={closeDrawer}
                      onKeyDown={closeDrawer}
                    >
                      Noticias
                    </Link>
                  </ListItem>
                </List>
              </Collapse>

              <ListItem key={1} button divider>
                <Link
                  className={classes.link}
                  href="/emprendedor/ecosistema"
                  onClick={closeDrawer}
                  onKeyDown={closeDrawer}
                >
                  Ecosistema
                </Link>
              </ListItem>
              <ListItem key={2} button divider>
                <Link
                  className={classes.link}
                  href="/emprendedor/aprendizaje"
                  onClick={closeDrawer}
                  onKeyDown={closeDrawer}
                >
                  Aprendizaje
                </Link>
              </ListItem>
              <ListItem key={3} button divider>
                <Link
                  className={classes.link}
                  href="/emprendedor/herramientas"
                  onClick={closeDrawer}
                  onKeyDown={closeDrawer}
                >
                  Herramientas
                </Link>
              </ListItem>
              <ListItem key={3} button divider>
                <Link
                  className={classes.link}
                  href="/emprendedor/notas"
                  onClick={closeDrawer}
                  onKeyDown={closeDrawer}
                >
                  Notas
                </Link>
              </ListItem>
              <ListItem key={3} button divider>
                <Link
                  className={classes.link}
                  href="/emprendedor/cuenta"
                  onClick={closeDrawer}
                  onKeyDown={closeDrawer}
                >
                  Cuenta
                </Link>
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </div>
    );
  };

  const destroyDrawer = () => {
    //const {classes} = this.props
    return (
      <AppBar className={classes.barra} position="static">
        <Toolbar>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item lg={1}>
              <CardActionArea href="/emprendedor/home">
                <img
                  className={classes.img}
                  src={imagePath}
                  alt="EmprendeGye"
                />
              </CardActionArea>
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
                    <Link className={classes.link}>
                      <Informacion />
                    </Link>

                    <Link
                      className={classes.link}
                      href="/emprendedor/ecosistema"
                    >
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
  };

  return <div>{drawerActivate ? createDrawer() : destroyDrawer()}</div>;
}
