import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'

export default function Header() {
  const navItems = ['Home', 'About', 'Contact']
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
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
