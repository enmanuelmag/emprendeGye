import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cardContainer: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    minHeight: '8rem',
    minHeight: '8rem',
  },
  cover: {
    maxWidth: 75,
    minWidth: 75,
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
    '& > h5': { lineHeight: '22px' },
    '& > div': { marginTop: '7px' },
    padding: '16px !important',
    paddingLeft: '0px !important',
  },
}));
