import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
  },
  board: {
    backgroundColor: '#fff !important',
    minHeight: '15% !important',
    maxHeight: '15% !important',
    height: '85vh !important',
  },
}));
