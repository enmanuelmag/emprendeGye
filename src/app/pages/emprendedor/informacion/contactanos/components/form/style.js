import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	paper: {
		'& label.Mui-focused': {
			//color: 'white',
			borderWidth: "2px",
		},
		'& .MuiInput-underline:after': {
			//borderBottomColor: 'white',
			borderWidth: "2px",
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				//borderColor: '',
				//fontWeight:"bold",
			},
			'&:hover fieldset': {
				borderColor: 'blue',
				borderWidth: "3px",

			},
			'&.Mui-focused fieldset': {
				//borderColor: 'white',
				borderWidth: "2px",

			},
		},
		padding: "3% ",
		//background: '#16244b',
		background: '#ffffff',
		boxSizing: "border-box",
		marginTop: "7% ",
		borderRadius: "18px",
		//flexFlow: "row wrap",

		marginLeft: '15%',
		marginRight: '15%',
		display: 'block',
		margin: 'auto',
	},

	root: {
		marginLeft: '15%',
		
		color: "#FFFFFF",
		background: '#16244b',
		//color: '#EBF0F2',
		marginTop: '2%',
		marginButtom: '2%',
		paddingTop: "8%",
		paddingBottom: "5%",
		textAlign: 'center',

	},

	textField: {
		width: '400px',
		boxSizing: "border-box",
		margin: theme.spacing(1),
		marginTop: "3%",
	},

	center: {
		marginTop: "3%",
		display: 'block',
		margin: 'auto',
	},


}));

