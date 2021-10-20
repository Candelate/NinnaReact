import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import logo from '../assets/logo.png'

const useStyles = makeStyles((theme) => ({
  image: {
    marginRight: "10px",
    width: "50px",
    height: "50px",
  }
}))

export default function NavBar() {
  const classes = useStyles();
  return(
    <div>
    <AppBar position="fixed">
    <Toolbar variant="dense">
    <IconButton edge="start" className="width = 20px" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    <img src={logo} className={classes.image}/>
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Ninna By Ac
    </Typography>
     </Toolbar>
    </AppBar>
   </div> 
  )
}