import { createStyles, makeStyles } from '@material-ui/core/styles';
import { green, blue } from "@material-ui/core/colors";
export default makeStyles((theme) =>
  createStyles({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 1127,
        position: 'relative',
        minHeight: 200,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      title: {
        textAlign: 'center',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(2),
        fontWeight: 'bold',
      },
      gridGraphic:{
          minHeight: "500px"
      },
      wrapper: {
        margin: theme.spacing(1),
        position: "relative"
      },
      buttonSuccess: {
        backgroundColor: green[500],
        "&:hover": {
          backgroundColor: green[700]
        }
      },
    
      buttonProgress: {
        color: blue[500],
        position: "absolute",
        top: "50%",
        left: "50%",
        marginTop: -12,
        marginLeft: -12
      }

  })
);