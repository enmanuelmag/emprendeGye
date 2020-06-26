import React from 'react';

import { Grid} from '@material-ui/core';
import ListButtom from './components/ListasEnlaces';
import ListLinks from './components/BloqueLinks';
import ListLinksInv from './components/BloqueLinksInv';
import makeStyles from './style';
//import DenseAppBar from './page';

export default function page() {
	 const classes = makeStyles();

	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={6} lg={4}>
						<ListButtom />
					</Grid>
					<Grid item xs={3} lg={4}>
						<ListLinks />
					</Grid>
					<Grid item xs={3} lg={4}>
						<ListLinksInv />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}