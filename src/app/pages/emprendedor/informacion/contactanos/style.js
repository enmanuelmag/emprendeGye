import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#16244b',
    marginTop: '6%',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    marginButtom: '2%',
    paddingBottom: '10%',
    textAlign: 'center',
    color: '#EBF0F2',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  gridItem: {
    alignItems: 'stretch',
    display: 'block',
    margin: 'auto',
  },

  gridInfo: {
    padding: '0px 8px !important',
  },

  textPerfil: {
    textAlign: 'center',
    marginTop: '7%',
    padding: '0px !important',
  },
}));
