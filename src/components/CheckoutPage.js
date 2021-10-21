import React from 'react';
import { makeStyles} from "@material-ui/core";
import { Grid } from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import checkoutCard from './CheckoutCard';
 //product data

import ItemList from "./components/ItemList"

const useStyles = makeStyles((theme) => ({
    root : {
        flexGrow: 1,
        padding: "2rem",
    },
}));

const CheckoutPage () => {
    const classes = useStyles();
    

    function FormRow (){
        return(
            <React.Fragment>
                {ItemList.map ((item) =>(
                 <Grid item xs={12} sm={8} md={6} lg={4}>
                    <CheckoutCard key={item.id} product={item} />
                <Grid/>
            ))}
            </React.Fragment>
        );
    }
}

return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography aling= 'center' gutterBottom variant='h4'>
                Shopping Cart
                </Typography>
            </Grid>   
            <Grid item xs={12} sm={8} md={9} container spacing={2}>
                <FormRow/>
            </Grid> 
            <Grid item xs={23} sm={4} md={3}>
                <Typography aling= 'center' gutterBottom variant='h4'>
                 <Total />
                <Typography/>
            </Grid>
        <Grid/>    
    </div>
);
