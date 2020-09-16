import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
    },
    form: {
		'& > *': {
			margin: theme.spacing(3),
			display: 'flex',
			flexWrap: 'wrap',
		},
	},    
    image: {
        display: 'block',
        margin: 'auto',
    },

    gridInfo: {
        padding: '0px 12px !important',
    },

    textPerfil: {
        textAlign: 'center',
        marginTop: '4%',
        padding: '0px !important',
    },
    border: {
        border: 'solid',
        borderColor: 'transparent'
    },
    table: {
        maxWidth: 500,
        border: 'solid 1px #d9d9d9',
        borderRadius: '7px',
        marginTop: '3rem',
      },
    title: {
        fontWeight: 'bold',
    },
    center: {
		display: 'block',
        margin: 'auto',
        textTransform: 'none',
	},
}));
