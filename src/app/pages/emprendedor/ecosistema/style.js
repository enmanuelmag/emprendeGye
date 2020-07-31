import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	cardContainer: {
		display: 'flex',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	container: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		paddingLeft: theme.spacing(8),
		paddingRight: theme.spacing(8),
	},
	containerList: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(1),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
	title: {
		textAlign: 'center',
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 80,
		maxWidth: 80,
		margin: theme.spacing(1),
		padding: theme.spacing(1),
	},
	spacing: {
		paddingLeft: theme.spacing(1.5),
		paddingRight: theme.spacing(1.5),
	},

	buttonText: {
		marginTop: theme.spacing(1),
		borderColor: '#3558BB',
        color: '#3558BB',
        textTransform: 'none',
        float: 'right',
        fontWeight: 'bold',
	},
}));
