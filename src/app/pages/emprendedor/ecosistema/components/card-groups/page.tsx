import React from 'react';
import {
	CardMedia,
	CardContent,
	Typography,
	Card,
	Divider,
	Chip,
} from '@material-ui/core';

import style from './style';

import { ItemsGroupForum } from '@interfaces/emprendedor';

export default function page({
	index,
	item,
}: {
	index: number;
	item: ItemsGroupForum;
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
							{item.title}
						</Typography>
						<Chip color='primary' label={item.type} size='small' />
					</CardContent>
				</div>
			</Card>
			<Divider variant='middle' />
		</React.Fragment>
	);
}
