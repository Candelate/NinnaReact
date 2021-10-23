import React from "react";
import { ClassNames } from "@emotion/react";
import { Button, makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme)=> ({
root:{
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems: "center",

},
button:{
    marginTop: "2px"
}

}))


const Total = () =>{
    const classes= useStyles()
    return(
        <div className={ClassNames.root}>
            <h5>Total Items: 3</h5>
            <h5>12.000</h5>
            <Button className={ClassNames.button} variant="contained" color="" >Check out</Button>
        </div>
    )
}

export default Total