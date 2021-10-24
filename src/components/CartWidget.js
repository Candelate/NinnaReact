import React, {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core";
import {Grid} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import ItemList from "./ItemList"
import Total from './Total';
import CartWidget from './CartWidget';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CardActions from "@mui/material/CardActions";
import {IconButton} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';


//product data


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem"
    },

}))

export default function CheckoutPage(props) {

    const myStorage = window.localStorage
    const createCart = () => {
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(JSON.parse(localStorage.getItem(keys[i])));
        }
        let value = 0
        let items = values.map((index, key) => {
            value = value + parseInt(index.Precio)
            return <Card sx={{maxWidth: 345}} key={key}>
                <CardHeader
                    title={index.Producto}
                    subheader="Solo stock disponible en visón"
                />
                <CardMedia
                    component="img"
                    height="350"
                    image={"./fotos/" + (index.idImagen)}
                    alt="Bota"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {index.Descripcion}
                    </Typography>
                </CardContent>
                ${index.Precio}

                <LocalOfferIcon/>
                <button onClick={() => {
                    myStorage.setItem(key, JSON.stringify(index))
                }}>
                    <CardActions disableSpacing>
                        Añadir al carrito
                        <IconButton aria-label="add to favorites">
                            <ShoppingCartIcon/>
                        </IconButton>
                    </CardActions>
                </button>
            </Card>
        });

        return <div className={"cartContent"}>
            <div className={"itemsContainer"}>{items}</div>

            <div className={'priceContainer'}>
                <h2>Subtotal: <span> ${value} </span></h2>
            </div>
            <div className={'formContainer'}>
                <Link to= "form">
                <button className={"formRedirect"}> Haz click aqui para completar tu compra</button>
                </Link>
            </div>
        </div>
    }



    return (
        <div className={'cartContainer'}>
            {createCart()}


        </div>
    )
}