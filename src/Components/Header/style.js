import { fade, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

    appBar: {
      height: '60px',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
        height: '50px',
        width: '50px',
    },

    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
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
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },

      '& ul': {
        listStyle: 'none',
        display: 'flex',
        margin: '0'
      },

      '& ul li': {
        display: 'flex',
        padding: '0 10px',
        fontSize: '14px'
      },

      '& ul li:first-child': {
        borderRight: '1px solid gray'
      },

      '& .location': {
        position: 'relative',
        '&:hover': {
          cursor: 'pointer',
        },
      },

      '& .location .dropdown-toggle::after' : {
        marginLeft: '30px !important',
        color: '#dcdcdc'
      },
      '& .location .dropdown-menu' : {
        position: 'absolute',
        top: '20px !important',
        left: '0 !important',
        height: '300px',
        right: '0',
        width: '100%',
        overflowY: 'scroll',
      },

      '& .location .dropdown-menu a' : {
        transition: 'all 0.25s',
        color: 'black'
      },

      '& .location .dropdown-menu a:hover' : {
        backgroundColor: '#60c5ef'
      },
    },


    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    sectionMenuCenter: {
      position: 'absolute',
      display: 'none',
      left: '50%',
      transform: 'translateX(-50%)',  
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      '& ul': {
        listStyle: 'none',
        margin: '0'
      },

      '& ul li': {
        display: 'inline-block',
        fontSize: '14px',
        padding: '0 10px',
      },

      '& ul li a:hover': {
        color: '#fb4226 !important',
        cursor: 'pointer',
      },
    
    },

    login: {
        textDecoration: 'none',
        fontSize: '14px',
        padding: '0 10px',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        // textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
          color: 'black',
        },
    },

    list: {
      width: '350',
    },
    fullList: {
      width: 'auto',
    },

    draw: {
      width: '400px !important' 
    }
}));

export default useStyles;
