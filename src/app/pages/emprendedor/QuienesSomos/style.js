import { makeStyles } from '@material-ui/core';


export default makeStyles((theme) => ({

	root: {
		flexGrow: 1,
	},
	
	img: {
		width: "100%",
		marginTop:"3%",
	
	},

	franja: {
		//es para que salga en la franja de nuestros objetivos el color azul.
		background: '#16244b',
		height: '9rem',
		marginTop: '2%',
		
	},

	frases1: {

		textAlign: 'center',
        paddingBottom: theme.spacing(2),
		fontWeight: 'bold',
		marginTop: '4%',
	},

	frases: {
		textDecorationColor: '#555555',
		marginTop: '3%',
		textAlign: 'center',
		marginRight: "6%",
		paddingLeft: '6%',
		lineHeight: '190%',
	},
}));
