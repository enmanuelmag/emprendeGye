import { makeStyles, createStyles } from '@material-ui/core';


export default makeStyles((theme) =>
  createStyles({
    card: {
      width: "100%"
    },
    content: {
      padding: 0,
    },
    titulo: {
      textAlign: "center",
      fontWeight: "fontWeightMedium",
      padding: 5,
      fontFamily: "sans-serif"
    }

  }),
);
