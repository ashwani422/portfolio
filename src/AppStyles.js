import createTheme from '@mui/material/styles/createTheme'


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#540D6E',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#eaeaea',
    },
  },
})

export default theme