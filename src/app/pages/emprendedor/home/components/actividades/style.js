import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    content: {
      padding: "0"
    },
    title: {
      variant: "h5",
    }

  }),
);
