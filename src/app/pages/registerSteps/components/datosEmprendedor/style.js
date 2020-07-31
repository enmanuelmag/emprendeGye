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
        padding: theme.spacing(2)
    },
    title2: {
        paddingBottom: theme.spacing(2),
        marginTop: '-5%',
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: 'bold',
    },
    container: {
        paddingBottom: '3%'
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));
