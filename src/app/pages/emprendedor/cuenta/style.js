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
        display: 'block',
        margin: 'auto',
    },
    gridInfo: {
        padding: '0px 12px !important',
    },
    textPerfil: {
        textAlign: 'center',
        marginTop: '7%',
        // marginRight: '13%',
        // marginLeft: '5%',
        // margin: '0px',
        padding: '0px !important',
    }
}));
