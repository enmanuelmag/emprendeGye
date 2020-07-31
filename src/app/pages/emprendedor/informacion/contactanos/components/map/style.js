import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	
	root: {

		height: '80vh', 
		width: '80%',
		//color: "#FFFFFF",
		/*background: '#16244b',
		marginTop: '6%',
		paddingTop: "4%",
		paddingLeft: "3%",
		paddingRight: "3%",
		marginButtom: '66%',
		paddingBottom: "4%",
		textAlign: 'center',
		color: '#EBF0F2',*/
	},

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

