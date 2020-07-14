import React from 'react';
import { Typography } from '@material-ui/core';
import style from './style';
import { TextField, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';

export default function Form() {
	const classes = style();
	return (
		<div className={classes.root}>
			<Box fontSize={26} fontWeight={500}>
				¿Tienes preguntas?

      </Box>
			<Typography variant="h3" component="div" >
				<Box fontWeight={999}>
					CONTÁCTANOS
      </Box>
			</Typography>
			<form autoComplete='off' className={classes.paper}>
				<TextField
					id='outlined-basic'
					className={classes.textField}
					required
					type='text'
					fullWidth
					label='Nombres'
					variant='outlined'
				/>
				<TextField
					id='outlined-basic'
					className={classes.textField}
					required
					type='text'
					fullWidth
					label='Apellidos'
					variant='outlined'
				/>
				<TextField
					id='outlined-basic'
					fullWidth
					required
					className={classes.textField}
					type='tel'
					label='Teléfono'
					variant='outlined'
				/>
				<FormControl variant="outlined" className={classes.textField}>
					<InputLabel htmlFor="outlined-age-native-simple">Parroquia</InputLabel>
					<Select
						native
						//value={state.age}
						//onChange={handleChange}
						label="Parroquia"
						inputProps={{
							name: 'Parroquia',
							id: 'outlined-age-native-simple',
						}}
					>
						<option aria-label="Seleccione" value="" />
						<option value={10}>Guayaquil</option>
						<option value={20}>Ximena</option>
						<option value={30}>Valdivia</option>
					</Select>
				</FormControl>
				<TextField
					id="date"
					label="Fecha de nacimiento"
					type="date"
					className={classes.textField}
					InputLabelProps={{
						shrink: true,
					}}
				/>
				<TextField
					id='outlined-basic'
					className={classes.textField}
					required
					type='email'
					fullWidth
					label='Correo'
					variant='outlined'
				/>
				<TextField
					id="outlined-textarea"
					label="Detalle"
					placeholder=""
					className={classes.textField}
					multiline
					variant="outlined"
				/>


				<Button className={classes.center} variant='contained' color='primary'>
					Enviar
		</Button>
			</form>
		</div>
	);
}
