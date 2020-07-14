import { makeStyles, createStyles } from '@material-ui/core';
//import { SketchPicker } from 'react-color';


export default makeStyles((theme) =>
  createStyles({
    root: {
		//display: 'flex',
		position: "relative",
		zIndex: "1",
	  },
	  paper: {
		//marginRight: theme.spacing(2),
	  },
	  link: {
		color: "inherit"
	 },
  })
);
