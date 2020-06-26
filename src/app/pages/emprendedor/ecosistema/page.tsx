import React from 'react';
import {
	Grid,
	Container,
	Card,
	CardContent,
	Typography,
	CardMedia,
	Button,
} from '@material-ui/core';

import CardPeople from './components/card-people';
import CardGroups from './components/card-groups';
import CardEvent from './components/card-events';

import { EnvEvents, EnvGroupForum, EnvPeople } from '@interfaces/emprendedor';

import style from './style';

export default function page({ data }: { data: any }) {
	const classes = style();

	const initData = {
		btnPeople: 'Buscar más personas',
		btnGroup: 'Buscar más grupos o foros',
		btnEvents: 'Buscar más eventos',
	};

	const people: EnvPeople = data['people'];
	const events: EnvEvents = data['events'];
	const gruopFroums: EnvGroupForum = data['gruopFroums'];

	return (
		<Container className={classes.container} maxWidth={'xl'}>
			<Grid container spacing={4}>
				<Grid item lg={4}>
					<Card className={classes.containerList} variant='outlined'>
						<Typography className={classes.title} variant='h5'>
							{people.title}
						</Typography>
						{people.items.map((item, index) => {
							return <CardPeople index={index} item={item} />;
						})}
						<Button
							className={classes.buttonText}
							variant='outlined'
							color='primary'
						>
							{initData.btnPeople}
						</Button>
					</Card>
				</Grid>

				<Grid item lg={4}>
					<Card className={classes.containerList} variant='outlined'>
						<Typography className={classes.title} variant='h5'>
							{gruopFroums.title}
						</Typography>
						{gruopFroums.items.map((item, index) => {
							return <CardGroups index={index} item={item} />;
						})}
					</Card>
					<Button
						className={classes.buttonText}
						variant='outlined'
						color='primary'
					>
						{initData.btnGroup}
					</Button>
				</Grid>
				<Grid item lg={4}>
					<Card className={classes.containerList} variant='outlined'>
						<Typography className={classes.title} variant='h5'>
							{events.title}
						</Typography>
						{events.items.map((item, index) => {
							return <CardEvent index={index} item={item} />;
						})}
					</Card>
					<Button
						className={classes.buttonText}
						variant='outlined'
						color='primary'
					>
						{initData.btnGroup}
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}
