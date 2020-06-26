import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	cardContainer: {
		display: 'flex',
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	cover: {
		maxWidth: 100,
		minWidth: 100,
		margin: theme.spacing(0.75),
		backgroundSize: 'contain',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
	},
}));
