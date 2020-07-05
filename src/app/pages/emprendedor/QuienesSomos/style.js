import { makeStyles } from '@material-ui/core';
import { SketchPicker } from 'react-color';


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
		background: '#16244b',
		height: '12rem',
		marginTop: '4%',
	},

	frases1: {
		fontFamily: 'Playfair Display',
		//fontFamily: 'Satisfy',
		//color:'#959393',
		color:'#A8A7A7',
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: '80px',
		marginTop: '-4%',
		
	},

	frases: {
		textDecorationColor: '#555555',
		marginTop: '3%',
		fontSize: '20px',
		fontFamily:'Roboto',
		//fontWeight: 'bold',
		textAlign: 'center',
		marginRight: "6%",
		paddingLeft: '6%',
		lineHeight: '190%',
	},
}));
