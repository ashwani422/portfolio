import Container from '@mui/material/Container'
import styled from '@mui/material/styles/styled'
import Typography from '@mui/material/Typography'
// import Particles from 'react-particles-js'
import Typewriter from 'typewriter-effect'

// START styled components
const Toolbar = styled('div')( ({theme}) => {
  return theme.mixins.toolbar
})

const Section = styled('section')`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background: #000;
  // color: #fff;
`
// END styled components


export default function IntroSection() {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Section>
        {/* <Particle /> */}
        <Typography variant='h5'>Hello!</Typography>
        <Typography
          variant='body1'
          component='div'
        >I am a <Typewriter
          options={{
            strings: ['Web Developer.', 'Gamer.'],
            autoStart: true,
            loop: true,
            cursor: '_',
            delay: 50,
            pauseFor: 4000
          }}       
        /></Typography>
      </Section>
    </Container>
  )
}
