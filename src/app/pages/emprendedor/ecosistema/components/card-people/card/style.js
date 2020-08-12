import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minHeight: '8rem',
    maxHeight: '8rem',
  },
  cover: {
    maxWidth: 100,
    minWidth: 100,
    backgroundSize: 'contain',
    display: 'block',
    margin: 'auto',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    padding: '16px !important',
    paddingLeft: '0px !important',
  },
}));
