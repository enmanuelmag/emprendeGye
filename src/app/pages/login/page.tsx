import React, {useState} from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
  Box,
  CardMedia,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import {
  emprendedorCuenta as emprendedorCuentaSelector,
} from '../../../redux/selectors';
import { getEmprendedorCuenta } from '../../../redux/actions/emprendedorCuenta';

import style from './style';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        EmprendeGye
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Page({ func }: { func: any }) {
  const classes = style();
  //console.log(func);
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [ref, setRef] = useState("/login");
  const history = useHistory();
  //const { updateEmail } = func;
  const dispatch = useDispatch();
  const emprendedorCuenta = useSelector((state) => emprendedorCuentaSelector(state));

  const initData = {
    title: 'Inicio de sesión',
    labelEmail: 'Correo',
    labelPass: 'Contraseña',
    remember: 'Recuérdame',
    button: 'Iniciar sesión',
    forgot: '¿Olvidó su contraseña?',
    create: '¿No tiene una cuenta? Regístrese',
    mySite: 'EmprendeGye',
  };
  
  React.useEffect(() => {
    if (ref !== "/login") {
      history.push(ref);
    }
  }); 

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log("En submit");
    let body = { "usuario": usuario, "contraseña": contrasenia }
    //console.log(body);
    dispatch(getEmprendedorCuenta(body));
    setRef("/emprendedor/home")
  }
  


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CardMedia component="img" image="assets/logodark.svg"></CardMedia>
        <Typography className={classes.title} component="h1" variant="h5">
          {initData.title}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={initData.labelEmail}
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setUsuario(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={initData.labelPass}
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setContrasenia(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={initData.remember}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(event) => {submitHandler(event)}}
            //href={ref}
          >
            {initData.button}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {initData.forgot}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/registerSteps" variant="body2">
                {initData.create}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
