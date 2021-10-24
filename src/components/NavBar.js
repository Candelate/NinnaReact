import React, { useEffect } from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {AppBar, Badge} from '@mui/material';
import {Toolbar} from '@mui/material';
import {IconButton} from '@mui/material';
import {Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import logo from '../assets/logo.png'
import {margin} from '@mui/system';
import CheckoutPage from "./CartWidget";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CardActions from "@mui/material/CardActions";
import {Link} from 'react-router-dom';


// Gama de colores
// vividTangerine:"#F7A399"
// mistyRose:"#FFE3E0"
// fireOpal:"#EF6351" 

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem"
    },
    grow: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: "#F7A399",
    },
    title: {
        fontFamily: "Libre Baskerville, serif"
    },
    iconButton: {
        color: "#FFE3E0"
    },
    logo: {
        height: "40px",
    },
    badge: {
        color: "#EF6351"
    },
    category: {
        fontFamily: "Libre Baskerville, serif",
        margin: "17px"
    }
}))

export default function NavBar() {
    const myStorage = window.localStorage
    const classes = useStyles();
    let propsCartLength = myStorage.length
    return (

        <div className={classes.root}>
            <AppBar className={classes.appBar} position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 2}}>
                        <img src={logo} className={classes.logo}/>
                    </IconButton>
                    <Link to="home">
                    <Typography className={classes.title} className={classes.mistyRose} variant="h6" component="div">
                        Ninna By Ac
                    </Typography>
                    </Link>
                    <div className={classes.grow}/>
                    <Link to="cuero">
                    <h3 className={classes.category}> Cuero</h3>
                    </Link>
                    <Link to="eco-cuero">
                        <h3 className={classes.category}> Eco-Cuero</h3>
                    </Link>    
                    <Link to="gamuza">
                        <h3 className={classes.category}> Gamuza</h3>
                    </Link>
                    <div className={classes.grow}/>
                    <Link to="checkout-page">
                    <IconButton className={classes.iconButton}>
                        <Badge badgeContent={propsCartLength} className={classes.fireOpal}>
                            <ShoppingCartIcon className={classes.mistyRose} />
                        </Badge>
                    </IconButton>
                    </Link>
                    <IconButton className={classes.iconButton}>
                        <LoginIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>

    )
}