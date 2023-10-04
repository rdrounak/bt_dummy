import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Header() {
  const buttonStyle = {
    color: '#fff', // Set the text color to white
    textDecoration: 'none', // Remove underline
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img
            src={require('./logo_red.png')}
            alt='Brand Logo'
            style={{
              height: 50,
              width: 150,
              objectFit: 'contain',
              borderRadius: '25%',
              padding: '3px',
            }}
          />
          <Box sx={{ marginLeft: 'auto' }}>
            <Button id='btn_home'>
              <Link to={'/'} style={buttonStyle}>
                {' '}
                Home
              </Link>
            </Button>
            <Button id='btn_about'>
              <Link to={'/about'} style={buttonStyle}>
                About
              </Link>
            </Button>
            <Button id='btn_contact'>
              <Link to={'/contact'} style={buttonStyle}>
                Contact
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
