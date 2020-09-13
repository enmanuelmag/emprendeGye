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
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  DialogTitle,
  DialogContentText,
  TextField,
} from '@material-ui/core';
import imagePath from './assets/logobarr.svg';

import Notifier from 'app/utils/Notifier';
import style from './style';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import {
  emprendedor as emprendedorSelector,
  emprendedorCuenta as emprendedorCuentaSelector,
  email as emailSelector,
} from '../../../redux/selectors';
import { getEmprendedor } from '../../../redux/actions/emprendedor';
import { getSesionEmprendedor } from '../../../redux/actions/emprendedorCuenta';
import { sendEmail } from 'redux/actions/enviarEmail';
import { enqueueSnackbar, removeSnackbar } from 'redux/actions/notifier';

export default function DenseAppBar() {
  const classes = style();
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);
  const [drawerActivate, setDrawerActivate] = useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const emprendedorCuenta = useSelector((state) => emprendedorCuentaSelector(state));

  const emprendedor = useSelector((state) => emprendedorSelector(state));
  const email = useSelector((state) => emailSelector(state));

  const [infoContact, setinfoContact] = useState({ email: '', subject: '' });

  const [openDialog, setOpenDialog] = React.useState(false);

  useEffect(() => {
    if(!emprendedor && emprendedorCuenta && Object.keys(emprendedorCuenta).length>0 ){
      console.log("home", emprendedorCuenta)
      dispatch(getEmprendedor({ idEmprendedor: emprendedorCuenta.idEmprendedor }));
    }
  },[emprendedorCuenta, dispatch, emprendedor]);

  useEffect(() => {
    if (!emprendedorCuenta) {
      dispatch(getSesionEmprendedor());
    }
  },[emprendedorCuenta, dispatch]);

  


  useEffect(() => {
    
    switch (email.state) {
      case 'START':
        dispatch(
          enqueueSnackbar({
            message: 'Enviando correo',
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'warning',
            },
          })
        );
        break;
      case 'ERROR':
        dispatch(
          enqueueSnackbar({
            message: 'Error al enviar el correo',
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'error',
            },
          })
        );
        handleClose();
        break;
      case 'COMPLETE':
        dispatch(
          enqueueSnackbar({
            message: 'Correo enviando correctamente',
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'success',
            },
          })
        );
        handleClose();
        break;
    }
  }, [email, emprendedor, dispatch, emprendedorCuenta]);

  console.log(emprendedor);

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
                    <Link
                      className={classes.link}
                      href="/emprendedor/ecosistema"
                      onClick={(event) => {
                        handleClickOpen(event);
                      }}
                    >
                      Soporte
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

  const handleClickOpen = (event) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const setNewValue = (event) => {
    let valor = event.target.value;
    let clave = event.target.name;
    setinfoContact((prevState) => {
      return { ...prevState, [clave]: valor };
    });
  };

  const clickEmail = (event) => {
    event.preventDefault();
    console.log(infoContact);

    dispatch(sendEmail(infoContact));
  };

  const dialogContact = () => {
    return (
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Contáctanos</DialogTitle>
        <form
          onSubmit={(event) => {
            clickEmail(event);
          }}
        >
          <DialogContent>
            <DialogContentText>
              Si tienes dudas sobre alguna características o problemas en el
              servicio avísanos para ayudarte a solucionarlo.
            </DialogContentText>
            <TextField
              autoFocus
              name="email"
              margin="dense"
              id="email"
              label="Correo"
              type="email"
              onChange={setNewValue}
              fullWidth
            />
            <TextField
              name="subject"
              margin="dense"
              id="subject"
              label="Asunto"
              type="text"
              onChange={setNewValue}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Enviar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  };

  return (
    <div>
      {drawerActivate ? createDrawer() : destroyDrawer()}
      {dialogContact()}
      <Notifier />
    </div>
  );
}
