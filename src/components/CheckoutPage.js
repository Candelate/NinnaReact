import React, { useState, useEffect } from 'react';
import { makeStyles} from "@material-ui/core";
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import {useStateValue} from '../StateProvider';
import checkoutCard from './CheckoutCard';
import ItemList from "./ItemList"
import Total from './Total';
import CheckoutCard from './CheckoutCard';


 //product data



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: "7rem"
    },
    
  }))

  export default function CheckoutPage() {
    const classes = useStyles();
    

    // function FormRow (){
    //     return(
    //         <React.Fragment>
    //             {ItemList.map ((item) =>(
    //              <Grid item xs={12} sm={8} md={6} lg={4}>
    //                 <CheckoutCard key={item.id} product={item} />
    //             </Grid>
    //         ))}
    //         </React.Fragment>
    //     );
    // }
return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography aling= 'center' gutterBottom variant='h4'>
                Shopping Cart
                </Typography>
        </Grid>   
        <Grid item xs={12} sm={8} md={9} container spacing={2}>
                {/* <FormRow/> */}
        </Grid> 
        <Grid item xs={23} sm={4} md={3}>
                <Typography aling= 'center' gutterBottom variant='h4'>
                 <Total />
                </Typography>
        </Grid>
        </Grid>    
    </div>
)}