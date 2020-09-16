import React, {useRef} from 'react';
import style from './style';
import { TextField, Typography } from '@material-ui/core';

export default function Page({ data }: { data: any }) {
    const classes = style();
    const [parroquia, setParroquia] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParroquia(event.target.value);
    };

    let emprendedor = localStorage.getItem('emprendedor');
    const emprendedorData = JSON.parse(emprendedor || "{}");
    let  nombres = useRef(null);
    let apellidos = useRef(null);
    let nacimiento = useRef(null);

	return (
		<form className={classes.root} autoComplete='off'>
            <Typography variant='body1'>
                Información básica:
            </Typography>
			<TextField
				id = 'firstNames'
                required
                ref = {nombres}
				type = 'text'
                label = 'Nombres'
                defaultValue = {emprendedorData.nombres || ""}
                variant = 'outlined'
			/>
			<TextField
				id='lastNames'
                required
                ref = {apellidos}
				type='text'
                label='Apellidos'
                defaultValue = {emprendedorData.apellidos || ""}
                variant='outlined'
			/>
			<TextField
				id='birthDay'
                required
                ref = {nacimiento}
                label='Fecha de nacimiento'
                defaultValue = {emprendedorData.nacimiento || ""}
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
		</form>
	);
}
