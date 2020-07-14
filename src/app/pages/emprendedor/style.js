import { createStyles, makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "blue",
      },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    typographyLink : {//typographyLink
      display: 'flex',
        //marginLeft: theme.spacing(2),
        display:"flex"
    },
    divLinkL: {
        //display: "inlineBlock",
        marginLeft: 0,
        marginRight: 'auto',
    },
    divLinkR: {
      marginLeft: 'auto',
      marginRight: 0,
    },
    link: {
      margin: theme.spacing(2),
      color: 'inherit',
      textDecoration: 'none !important',
    },

    barra: {
      background: '#16244b',
    },

    img: {
      width: '80%',
    },
    searchBar: {
      display: 'block',
      margin: 'auto',
    },
    tabs: {
      textAlign: 'right',
      display: 'block',
      margin: 'auto',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    // sectionDesktop: {
    //     display: 'none',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'flex',
    //     },
    // },
    // sectionMobile: {
    //     display: 'flex',
    //     [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //     },
    // },
  })
);
