import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
    },
    gridItem: {
        alignItems:'stretch',
        direction:'row',
        display: 'block',
        margin: 'auto'
    },
    gridInfo: {
        padding: '0px 12px !important',
    },
    textPerfil: {
        textAlign: 'center',
        marginTop: '4%',
        padding: '0px 12px !important',
    }
}));
