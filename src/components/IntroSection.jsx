import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import Typewriter from 'typewriter-effect'

import webDeveloperSVG from '../images/web_developer.svg'
// import fotniteSVG from '../images/fortnite.svg'


//-- START Styled Components --------------------------------------------------
import {Toolbar, WrapperSection} from './styles/IntroSectionStyledCom'
//-- END Styled Components --------------------------------------------------


//----------------------------------------------------------------------------------------------------
// Main Component Function
//----------------------------------------------------------------------------------------------------
export default function IntroSection() {
  return (
    <Container maxWidth='lg'>
      <WrapperSection>
        <Toolbar sx={{alignSelf: 'flex-start'}} />

        <div className="intro-container">
          <Typography variant='h6'>Hello!&#128075;</Typography>
          <Typography variant='h5'>I'm <span className='name-span'>Ashwani Kumar.</span></Typography>
          <Typography
            variant='h4'
            component='div'
          >I'm a <Typewriter
            options={{
              strings: ['Web Developer.', 'React Developer.'],
              autoStart: true,
              loop: true,
              cursor: '_',
              delay: 50,
              pauseFor: 3000
            }}       
          /></Typography>
          <Typography variant='body1'>Profiles:</Typography>
          <Box component='div'>
            <IconButton size='large' href='https://github.com/ashwani422' target='_blank'>
              <GitHubIcon fontSize='large' sx={{color: '#000', opacity: '.7'}} />
            </IconButton>
            <IconButton size='large' href='https://linkedin.com/in/ashwani-kumar-0578891bb' target='_blank'>
              <LinkedInIcon fontSize='large' sx={{color: '#000', opacity: '.7'}} />
            </IconButton>
          </Box>
        </div>

        <div className="svg-container">
          <img src={webDeveloperSVG} alt="IMG" loading="lazy" />  
        </div>
      </WrapperSection>
    </Container>
  )
}
