import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

function HideOnScroll(props) {
  const {children} = props

  const trigger = useScrollTrigger({
    target: window ? window : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NabBar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth='lg'>
            <Toolbar
              disableGutters={true}
            >
              <Typography
                variant='h6'
                component='div'
                sx={{
                  letterSpacing: '1px'
                }}
              >Portfolio</Typography>    
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </>
  )
}
