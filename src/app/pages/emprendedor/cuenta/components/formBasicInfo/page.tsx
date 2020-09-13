import React from 'react';
import style from './style';
import { TextField, Typography } from '@material-ui/core';

export default function Page({ data }: { data: any }) {
    const classes = style();
    const [parroquia, setParroquia] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParroquia(event.target.value);
    };

	return (
		<form className={classes.root} autoComplete='off'>
            <Typography variant='body1'>
                Información básica:
            </Typography>
			<TextField
				id='firstNames'
				required
				type='text'
				label='Nombres'
                variant='outlined'
			/>
			<TextField
				id='lastNames'
				required
				type='text'
				label='Apellidos'
				variant='outlined'
			/>
			<TextField
				id='birthDay'
				required
				label='Fecha de nacimiento'
				variant='outlined'
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
            <TextField
				id='description'
                required
                label='Breve descripción'
                multiline
                rows={3}
				variant='outlined'
			/>
		</form>
	);
}
