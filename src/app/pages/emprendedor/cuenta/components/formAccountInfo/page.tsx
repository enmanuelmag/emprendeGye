import React from 'react';

import style from './style';
import { TextField, Button, Typography } from '@material-ui/core';

export default function page() {
	const classes = style();
	return (
		<form className={classes.root} autoComplete='off'>
            <Typography variant='body1'>
                Cuenta:
            </Typography>
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
		</form>
	);
}
