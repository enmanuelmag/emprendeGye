import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
			display: 'flex',
			flexWrap: 'wrap',
		},
	},
    title: {
        padding: theme.spacing(3)
    },
    container: {
        paddingBottom: '3%'
    },
    formControl: {
        margin: theme.spacing(3)
    },
    bold: {
        fontWeight: 'bold',
    },
}));
