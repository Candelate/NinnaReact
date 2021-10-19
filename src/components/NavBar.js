import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';


export default function NavBar() {
  return(
    <AppBar position="fixed">
    <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Ninna By Ac
    </Typography>
     </Toolbar>
    </AppBar>
    
  )
}