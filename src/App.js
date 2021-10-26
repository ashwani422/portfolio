import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './AppStyles'

import NavBar from './components/NabBar'
import IntroSection from './components/IntroSection'
import SkillsSection from './components/SkillsSection'

//----------------------------------------------------------------------------------------------------
//-- Main Component Function
//----------------------------------------------------------------------------------------------------
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <IntroSection />
        <SkillsSection />
      </ThemeProvider>
    </>
  )
}