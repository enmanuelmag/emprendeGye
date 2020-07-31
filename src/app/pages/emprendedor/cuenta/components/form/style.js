import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(3),
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '25ch',
	},
	center: {
		display: 'block',
        margin: 'auto',
        textTransform: 'none',
	},
}));
