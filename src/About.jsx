import React from 'react'
import { Container, Typography, Grid, Avatar, Paper } from '@mui/material'

function About() {
  return (
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Typography variant='h4' gutterBottom>
        About Baidyanath Threads
      </Typography>
      <Grid container spacing={4} alignItems='center'>
        <Grid item xs={12} sm={6}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img
              src='https://images.pexels.com/photos/15040569/pexels-photo-15040569/free-photo-of-women-in-front-residential-building.jpeg'
              alt='Baidyanath Threads'
              style={{ maxWidth: '100%', maxHeight: '300px', width: 'auto' }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='body1' paragraph>
            Baidyanath Threads, named after Lord Baidyanath, one of the names of
            Lord Shiva, is a textile company that embodies the divine artistry
            of textiles. Our journey is an ode to tradition, innovation, and
            spirituality, reflecting our commitment to excellence.
          </Typography>
          <Typography variant='body1' paragraph>
            We are dedicated to producing high-quality textiles that not only
            adorn your life with elegance but also carry the essence of
            spirituality. Every thread we create is a testimony to the rich
            cultural heritage and craftsmanship that defines our brand.
          </Typography>
        </Grid>
      </Grid>
      <Typography variant='h5' gutterBottom>
        Founders
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Avatar
              alt='Amit Thakur'
              src='https://images.pexels.com/photos/3459921/pexels-photo-3459921.jpeg'
              sx={{ width: 150, height: 150, mx: 'auto', my: 2 }}
            />
            <Typography variant='h6' gutterBottom>
              Amit Thakur
            </Typography>
            <Typography variant='body2'>
              Meet Amit Thakur, co-founder of Baidyanath Threads, who brings
              years of experience in textile manufacturing and a deep passion
              for creating sustainable and fashionable textiles. His dedication
              to craftsmanship ensures our products are of the highest quality.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Avatar
              alt='Rachna Thakur'
              src='https://images.pexels.com/photos/3459921/pexels-photo-3459921.jpeg'
              sx={{ width: 150, height: 150, mx: 'auto', my: 2 }}
            />
            <Typography variant='h6' gutterBottom>
              Rachna Thakur
            </Typography>
            <Typography variant='body2'>
              Introducing Rachna Thakur, the other half of our dynamic duo. As a
              visionary entrepreneur with a keen eye for design, she ensures
              that each creation is not only fashionable but also
              environmentally conscious. Her creativity shapes the future of
              Baidyanath Threads.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default About
