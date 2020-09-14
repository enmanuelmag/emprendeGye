import { makeStyles, createStyles } from '@material-ui/core';

export default makeStyles((theme) =>
  createStyles({
    root: {
		//display: 'flex',
		position: "relative",
		zIndex: '99',
		//zIndex: "1",
	  },
	  link: {
        margin: theme.spacing(1),
        color: 'inherit',
        textDecoration: 'none !important',
	 },
	 dropMenuPaper:{
        zIndex: '99',
        position: 'static'
	 }
  })
);