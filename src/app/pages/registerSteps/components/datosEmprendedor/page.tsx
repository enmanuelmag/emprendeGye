import React, {useEffect} from 'react';
import style from './style';
import { TextField, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { createEmprendedor } from '../../../../../redux/actions/emprendedor';
import { createEmprendedorCuenta } from '../../../../../redux/actions/emprendedorCuenta';
import { useSelector, useDispatch } from 'react-redux';
import {
  emprendedor as emprendedorSelector,
} from '../../../../../redux/selectors';

export default function Page() {
  const classes = style();
  const [value, setValue] = React.useState('');
  const [otherOption, setOther] = React.useState('');
  const dispatch = useDispatch();

  const usuarioEmprendedor = {};
  const usuarioCuenta = {}
  let correo;

  const emprendedor = useSelector((state) => emprendedorSelector(state));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = (event.target as HTMLInputElement).value;
    setValue(newValue);
    if(Object.keys(usuarioEmprendedor).length >= 0 && Object.keys(usuarioCuenta).length >= 2){
        console.log("MAYOR QUE 0? ", usuarioEmprendedor);
        dispatch(createEmprendedor(usuarioEmprendedor));
        console.log("VALID 2 ", usuarioCuenta);
    }    
    if (newValue !== 'otro') {
      setOther('');
    }
  };

  const handleOther = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value === 'otro') {
      setOther(event.target.value);
    }
  };

//   let validator = false;

//   while(!emprendedor || Object.keys(emprendedor).length <= 0) {
//       console.log("iN whjile");
//     if(emprendedor && Object.keys(emprendedor).length >= 0){
//         usuarioCuenta["idEmprendedor"] = emprendedor.idEmprendedor;
//         console.log("WHILE ADD ID", usuarioCuenta);
//         validator = true;
//         break;
//     }
// //   }
//   useEffect(() => {
//     if(emprendedor && Object.keys(emprendedor).length >= 0 && validator){
//         console.log("EUREKA", emprendedor);
//         // localStorage.setItem('emprendedor', JSON.stringify(emprendedor));
//         // console.log("LO QUE QUIERE XAVIER", emprendedor);
//         // const jsonUsuarioCuenta = JSON.parse(localStorage.getItem('emprendedor') || "{}")
//         // usuarioCuenta["idEmprendedor"] = jsonUsuarioCuenta.idEmprendedor || "";
//         dispatch(createEmprendedorCuenta(usuarioCuenta));
//     }
//   },[emprendedor, dispatch, usuarioCuenta, validator]);

  return (
    <Grid container xs={12} className={classes.container}>
      <Grid item xs={12} lg={12}>
        <Typography
          variant="h4"
          align="center"
          display="block"
          className={classes.title}
        >
          Datos del emprendedor
        </Typography>
      </Grid>
      <Grid item lg={2}></Grid>
      <Grid item xs={12} lg={4}>
        <Card variant="outlined" className={classes.formControl}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              align="center"
              className={classes.bold}
            >
              Datos generales
            </Typography>
            <form className={classes.root} autoComplete="off">
              <TextField
                id="outlined-basic"
                required
                type="text"
                label="Nombres"
                onChange = {(event) => {usuarioEmprendedor["nombres"] = event.target.value}}
              />
              <TextField
                id="outlined-basic"
                required
                type="text"
                label="Apellidos"
                onChange = {(event) => {usuarioEmprendedor["apellidos"] = event.target.value}}
              />
              <TextField
                id="outlined-basic"
                required
                type="id"
                label="Cédula"
                onChange = {(event) => {usuarioEmprendedor["cedula"] = event.target.value}}
              />
              <TextField
                id="outlined-basic"
                required
                type="email"
                label="Correo electrónico"
                onChange = {(event) => {correo = event.target.value; 
                                        usuarioCuenta["usuario"] = correo;
                                        usuarioEmprendedor["correo"] = correo}}
              />
              <TextField
                id="outlined-basic"
                required
                type="password"
                label="Contraseña"
                onChange = {(event) => {usuarioCuenta["contraseña"] = event.target.value}}
              />
              <TextField
                id="date"
                label="Fecha de nacimiento"
                type="date"
                defaultValue={new Date()}
                onChange = {(event) => {usuarioEmprendedor["nacimiento"] = event.target.value}}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Card variant="outlined" className={classes.formControl}>
          <CardContent>
            <form className={classes.root} autoComplete="off">
              <FormControl component="fieldset">
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                  align="center"
                  className={classes.title2}
                >
                  Ocupación
                </Typography>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="estudiante"
                    control={<Radio />}
                    label="Estudiante universitario"
                  />
                  <FormControlLabel
                    value="jubilado"
                    control={<Radio />}
                    label="Jubilado"
                  />
                  <FormControlLabel
                    value="empleado"
                    control={<Radio />}
                    label="Empleado"
                  />
                  <FormControlLabel
                    value="subempleado"
                    control={<Radio />}
                    label="Subempleado"
                  />
                  <FormControlLabel
                    value="otro"
                    control={<Radio />}
                    label="Otro"
                  />
                  <TextField
                    id="outlined-basic"
                    type="text"
                    label="Otra ocupación"
                    value={otherOption}
                    onChange={handleOther}
                    disabled={value === 'otro' ? false : true}
                  />
                </RadioGroup>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={2}></Grid>
    </Grid>
  );
}
