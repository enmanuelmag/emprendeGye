import React, {useEffect} from 'react';
import style from './style';

import { Grid, Typography, Container, Button, TextField } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import Image from './components/image';
import parroquias from './components/formBasicInfo/datosParroquias';

import { updateEmprendedor } from '../../../../redux/actions/emprendedor';
import { useSelector, useDispatch } from 'react-redux';
import {
    emprendedor as emprendedorSelector,
  } from '../../../../redux/selectors';
import { getEmprendedor } from '../../../../redux/actions/emprendedor';

export default function Page() {
    const classes = style();
    const dispatch = useDispatch();

    const data = parroquias['parroquias'];
    const [parroquia, setParroquia] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParroquia(event.target.value);
    };

    let nombres;
    let apellidos;
    let nacimiento;
    let telefono;

    const emprendedor = useSelector((state) => emprendedorSelector(state));
    const emprendedorCuenta = JSON.parse(localStorage.getItem("emprendedorCuenta") || "{}");

    useEffect(() => {
        if(!emprendedor){
            dispatch(getEmprendedor({ idEmprendedor: emprendedorCuenta.idEmprendedor }));
        }
        console.log("CUENTA", emprendedor);
      },[emprendedorCuenta, dispatch, emprendedor]);

    const updateUserInfo = () => {
        if(nombres !== undefined) { emprendedor["nombres"] = nombres}
        if(apellidos !== undefined) {emprendedor["apellidos"] = apellidos}
        if(nacimiento !== undefined) {emprendedor["nacimiento"] = nacimiento}
        if(telefono !== undefined) {emprendedor["telefono"] = telefono}
        console.log("LO QUE SE VA A UPDATE", emprendedor)
        dispatch(updateEmprendedor(emprendedor));
        window.location.reload(false);
    };

    if(!emprendedor || Object.keys(emprendedor).length <= 0) return null;
    return (
        <Container maxWidth={'lg'} className={classes.root}>
            <Grid container item xs={12} lg={12} className={classes.border}
            justify="center" spacing={3}>
                <TableContainer className={classes.table}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell align={'center'}>
                                    <Typography variant='h5' className={classes.title}>
                                        Perfil público
                                    </Typography>
                                    <Typography variant='body1'>
                                        Añade información sobre ti
                                    </Typography>
                                    <Image/>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <form className={classes.form} autoComplete='off'>
                                        <Typography variant='body1'>
                                            Información básica:
                                        </Typography>
                                        <TextField
                                            id = 'firstNames'
                                            required
                                            type = 'text'
                                            label = 'Nombres'
                                            defaultValue = {emprendedor.nombres || ""}
                                            variant = 'outlined'
                                            onChange = {(event) => {nombres = event.target.value}}
                                        />
                                        <TextField
                                            id='lastNames'
                                            required
                                            ref = {apellidos}
                                            type='text'
                                            label='Apellidos'
                                            defaultValue = {emprendedor.apellidos || ""}
                                            variant='outlined'
                                            onChange = {(event) => {apellidos = event.target.value}}
                                        />
                                        <TextField
                                            id='birthDay'
                                            required
                                            ref = {nacimiento}
                                            label='Fecha de nacimiento'
                                            defaultValue = {emprendedor.nacimiento || ""}
                                            variant='outlined'
                                            onChange = {(event) => {nacimiento = event.target.value}}
                                        />
                                        <TextField
                                            id="parroquia"
                                            select
                                            label="Parroquia"
                                            value={parroquia}
                                            onChange={handleChange}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            helperText="Seleccione su parroquia"
                                            variant="outlined"
                                            >
                                            {data.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </form>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <form className={classes.form} autoComplete='off'>
                                        <Typography variant='body1'>
                                            Cuenta:
                                        </Typography>
                                        <TextField
                                            id='email'
                                            required
                                            disabled
                                            type='email'
                                            label='Correo'
                                            defaultValue= {emprendedorCuenta.usuario || ""}
                                            variant='outlined'
                                        />
                                        <TextField
                                            id='telf'
                                            required
                                            ref = {telefono}
                                            type='tel'
                                            label='Teléfono'
                                            defaultValue= {emprendedor.telefono || ""}
                                            variant='outlined'
                                            onChange = {(event) => {telefono = event.target.value}}
                                        />
                                    </form>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Button variant='contained' color='primary'
                                            onClick={updateUserInfo}
                                            className={classes.center}>
                                        Guardar
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Container>
	);
}
