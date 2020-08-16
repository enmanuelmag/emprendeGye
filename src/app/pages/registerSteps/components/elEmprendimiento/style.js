import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		'& > *': {
			// margin: theme.spacing(2),
			display: 'flex',
			flexWrap: 'wrap',
		},
    },
    section: {
        marginBottom: theme.spacing(5),
    },
    bold: {
        fontWeight: 'bold',
    },
    title: {
        padding: theme.spacing(3)
    },
    icon: {
        textAlign: 'right',
        padding: '0',
    },
    section2: {
        margin: 'auto'
    },
    container: {
        paddingBottom: '3%'
    },
    formControl: {
        margin: theme.spacing(3)
    }
}));
