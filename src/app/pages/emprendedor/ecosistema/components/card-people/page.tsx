import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Divider,
} from '@material-ui/core';

import { ItemsPeople } from '@interfaces/emprendedor';
import style from './style';

export default function page({
	index,
	item,
}: {
	index: number;
	item: ItemsPeople;
}) {
	const classes = style();

	return (
		<React.Fragment>
			<Card
				className={classes.cardContainer}
				key={`id_people_${index}`}
				elevation={0}
				variant={'elevation'}
			>
				<CardMedia
					component='img'
					className={classes.cover}
					image={item.srcImg}
					title={item.alt}
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component='h5' variant='h5'>
							{item.name}
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							{item.description}
						</Typography>
					</CardContent>
				</div>
			</Card>
			<Divider variant='middle' />
		</React.Fragment>
	);
}
