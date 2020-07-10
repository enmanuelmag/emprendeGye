import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './style';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { TextField, Button } from '@material-ui/core';


export default function contactanos() {
	const classes = style();
	return(
		<form className={classes.root} autoComplete='off'>
		<TextField
			id='outlined-basic'
			required
			type='text'
			fullWidth
			label='Nombres'
			variant='outlined'
		/>
		<TextField
			id='outlined-basic'
			required
			type='text'
			fullWidth
			label='Apellidos'
			variant='outlined'
		/>
		<TextField
			id='outlined-basic'
			required
			type='email'
			fullWidth
			label='Correo'
			variant='outlined'
		/>
		<TextField
			id='outlined-basic'
			fullWidth
			required
			type='tel'
			label='Teléfono'
			variant='outlined'
		/>
        <TextField
        id="date"
        label="Fecha de nacimiento"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

	
		<Button className={classes.center} variant='contained' color='primary'>
			Enviar
		</Button>
	</form>
	);
  }


