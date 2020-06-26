import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	cardContainer: {
		display: 'flex',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	cover: {
		display: 'block',
		maxWidth: '90%',
		minWidth: '90%',
		margin: 'auto',
		backgroundSize: 'contain',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		display: 'block',
	},
}));
