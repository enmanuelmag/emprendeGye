import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	Divider,
} from '@material-ui/core';
import style from './style';
import Image from "./image";

export default function page() {
	const classes = style();
	return (
		<Card>
			<CardHeader title="Curva de emprendimiento"/>
			<Divider />
			<CardContent className={classes.content}>
				<Image/>	
			</CardContent>
		</Card>
	);
}
