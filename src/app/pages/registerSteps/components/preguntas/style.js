import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(2),
			display: 'flex',
			flexWrap: 'wrap',
		},
    },
    section: {
        marginBottom: theme.spacing(3)
    },
    section2: {
        margin: 'auto'
    },
    title: {
        padding: theme.spacing(3)
    },
    bold: {
        fontWeight: 'bold'
    },
    container: {
        paddingBottom: '3%'
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));
