import React from 'react';
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
  console.log(func);
  const { login, updateEmail } = func;

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
            onChange={updateEmail}
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
            //onClick={login}
            href="/emprendedor"
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
              <Link href="/register" variant="body2">
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
