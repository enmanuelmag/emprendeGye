import { makeStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) => ({

	root: {
		flexGrow: 1,
	},
	
	img: {
		width: '98%',
		marginTop: "5%",
		paddingLeft: '2%',
		paddingRight: '2%',
	},

	franja: {
		//es para que salga en la franja de nuestros objetivos el color azul.
		background: '#16244b',
		height: '12rem',
		marginTop: '4%',
	},

	frases1: {
		fontFamily: 'Playfair Display',
		color:'#A8A7A7',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: '80px',
		marginTop: '-4%',
		
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
