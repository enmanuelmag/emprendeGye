import React from 'react';
import {
	CardMedia,
	CardContent,
	Typography,
	Card,
	Divider,
    Chip,
    Grid,
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
                            <Typography component='h5' variant='subtitle1'>
                                {item.title}
                            </Typography>
                            <Chip color='primary' label={item.type} size='small' />
                        </CardContent>
                    </div>
                </Grid>
            </Grid>
            </Card>
            
			<Divider variant='middle' />
		</React.Fragment>
	);
}
