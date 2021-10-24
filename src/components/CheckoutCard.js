import React, {useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
});

//cardActions:{display:"flex" justifyContent:"space-betwwen" textAling:"center"  }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem"
    },
}))

export default function CheckoutCard({
                                         // Item: { id, name, productType, image, price ,rating, description},
                                     }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);

    }


    return (
        <Card sx={{maxWidth: 345}}>
            <CardHeader
                title="Balctic"
                subheader="Solo stock disponible en visón"
            />

            <CardMedia
                component="img"
                height="350"
                image="./fotos/balctic.jpeg"
                alt="Bota"
            />

            <CardActions disableSpacing className={classes.Card}>
                <IconButton>
                    <DeleteIcon fontSize="large"/>
                </IconButton>
            </CardActions>

        </Card>
    );
}
  