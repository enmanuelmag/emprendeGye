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

		'& > *': {
			margin: theme.spacing(1),
			
		},
		display: 'flex',
		flexWrap: 'wrap',
		padding: "4% ",
		background: '#ffffff',
		//background: '#16244b',
		//boxSizing: "border-box",
		marginTop: "1% ",
		borderRadius: "28px",
		//flexFlow: "row wrap",
		//marginLeft: '15%',
		//marginRight: '15%',
		//display: 'block',
		//margin: 'auto',
	},

	root: {
		//color: "#FFFFFF",
		background: '#16244b',
		marginTop: '6%',
		paddingTop: "4%",
		paddingLeft: "3%",
		paddingRight: "3%",
		marginButtom: '66%',
		paddingBottom: "4%",
		textAlign: 'center',
		color: '#EBF0F2',
	},

	
	/*	textField: {
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
	
	*/

	textField: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		width: '27ch',
	},

	center: {
		display: 'block',
		margin: 'auto',
		textTransform: 'none',
	},

}));

