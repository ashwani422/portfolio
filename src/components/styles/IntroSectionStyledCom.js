import styled from '@mui/material/styles/styled'


const Toolbar = styled('div')(({theme}) => theme.mixins.toolbar)

const WrapperSection = styled('section')(({theme}) => ({
  minHeight: '100vh',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  
  //-- START intro section styles --------------------------------------------------
  '.intro-container': {
    position: 'absolute',
    top: 100,

    '.name-span': {
      color: theme.palette.secondary.light,
    },
    
    '.Typewriter': {
      color: theme.palette.secondary.light,      
    },
  },  
  //-- END intro section styles --------------------------------------------------

  //-- START svg section styles --------------------------------------------------
  '.svg-container': {
    textAlign: 'center',

    'img': {
      maxWidth: '100%',
    },
  },  
  //-- END svg section styles --------------------------------------------------

  // media query applies above the 'sm' breakpoint width
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(2),
    '.Typewriter': {
      // minWidth: '300px',
      display: 'inline-block',
    },   
  },
  
  // media query applies above the 'md' breakpoint width
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    justifyContent: 'initial',
    alignItems: 'center',

    '.intro-container': {
      zIndex: 0,
      top: '30%',

      'h6': {
        fontSize: '2rem',
      },
      
      'h5': {
        fontSize: '2.5rem',
      },

      'h5 + div': {
        fontSize: '3.5rem',
      }
    },

    '.svg-container': {
      zIndex: -1,
      flexGrow: 1,
      textAlign: 'right',

      'img': {
        width: '60%',
      }
    },  
  },
}))

export {Toolbar, WrapperSection}
