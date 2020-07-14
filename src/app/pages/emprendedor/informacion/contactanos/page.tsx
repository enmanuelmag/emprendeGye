import React from 'react';
import { Grid } from '@material-ui/core';
import Form from "./components/form";
//import Image from "./components/image";
//import style from './style';

export default function FContactanos() {
	//const classes = style();
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={12} lg={8}>
						<Form/>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}