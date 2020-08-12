import React from 'react';

import style from './style';
import { TextField, Button } from '@material-ui/core';

export default function page() {
	const classes = style();
	return (
		<form className={classes.root} autoComplete='off'>
			<TextField
				id='outlined-basic'
				required
				type='text'
				label='Nombres'
                variant='outlined'
			/>
			<TextField
				id='outlined-basic'
				required
				type='text'
				label='Apellidos'
				variant='outlined'
			/>
			<TextField
				id='outlined-basic'
				required
				type='email'
				label='Correo'
				variant='outlined'
			/>
			<TextField
				id='outlined-basic'
				required
				type='tel'
				label='Teléfono'
				variant='outlined'
			/>
			<TextField
				id='outlined-basic'
				required
				label='Fecha de nacimiento'
				variant='outlined'
			/>
			<Button className={classes.center} variant='contained' color='primary'>
				Guardar
			</Button>
		</form>
	);
}
