import { createStyles, makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
export default makeStyles((theme) =>
  createStyles({
    root: {
      minWidth: '350px',
    },
    avatar: {
      backgroundColor: red[500],
    },

  }),
);
