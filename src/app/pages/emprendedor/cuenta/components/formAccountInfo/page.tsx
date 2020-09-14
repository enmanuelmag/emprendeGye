import React from 'react';

import style from './style';
import { TextField, Typography } from '@material-ui/core';

export default function page() {
    const classes = style();
    
    let emprendedorCuenta = localStorage.getItem('emprendedorCuenta');
    const emprendedorCuentaData = JSON.parse(emprendedorCuenta || "{}");

    let emprendedor = localStorage.getItem('emprendedor');
    const emprendedorData = JSON.parse(emprendedor || "{}");

	return (
		<form className={classes.root} autoComplete='off'>
            <Typography variant='body1'>
                Cuenta:
            </Typography>
			<TextField
				id='email'
                required
                disabled
				type='email'
                label='Correo'
                defaultValue= {emprendedorCuentaData.usuario ? emprendedorCuentaData.usuario+"@gmail.com" : ""}
				variant='outlined'
			/>
			<TextField
				id='telf'
                required
				type='tel'
                label='Teléfono'
                defaultValue= {emprendedorData.telefono || ""}
				variant='outlined'
			/>
		</form>
	);
}
