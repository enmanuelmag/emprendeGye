import React from 'react';
import {
	Card,
	CardMedia,
	CardContent,
	Typography,
    Divider,
    Grid
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
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={4}>
                    <CardMedia
                        component='img'
                        className={classes.cover}
                        image={item.srcImg}
                        title={item.alt}
                    />
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component='h6' variant='subtitle1'>
                                {item.name}
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                {item.description}
                            </Typography>
                        </CardContent>
                    </div>
                </Grid>
            </Grid>
			</Card>

			<Divider variant='middle' />
		</React.Fragment>
	);
}
