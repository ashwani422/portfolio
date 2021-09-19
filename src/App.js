import CssBaseline from '@mui/material/CssBaseline'
import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'

import NavBar from './components/NabBar'
import IntroSection from './components/IntroSection'

// -------------------- START Custom theme --------------------
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
// -------------------- END Custom theme --------------------

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <IntroSection />
      </ThemeProvider>
    </>
  )
}