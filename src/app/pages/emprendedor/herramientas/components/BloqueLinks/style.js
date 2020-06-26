import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        flexWrap: 'wrap',
        width: '80%',
        marginLeft:'16%',
      },
    },

    typography: {
      paddingLeft:'30%',
      paddingTop: '10%',
    },

    img: {
		width: '80%',
	},
  }),
);