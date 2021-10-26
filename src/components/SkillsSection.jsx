import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import styled from '@mui/material/styles/styled'


//-- STARTING styled coomponents --------------------------------------------------------------------------------
const WrapperSection = styled('section')(({theme}) => ({
  background: 'skyblue',
  minHeight: '100vh',

  '& > h2:nth-of-type(1)': {
    textAlign : 'center',
  },
}))
//-- STARTING styled coomponents --------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------
//-- Main Component Function
//----------------------------------------------------------------------------------------------------
export default function SkillsSection () {

  return (
    <Container maxWidth='lg'>
      <WrapperSection>

        <Typography variant='h2'>Skills</Typography>

        <div className="skills-div">
         skills here
        </div>

      </WrapperSection>
    </Container>
  )
}
