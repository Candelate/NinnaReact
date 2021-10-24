import * as React from 'react';
import { useState, useEffect} from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { db } from '../Firebase/Firebase';
import { collection, getDocs} from 'firebase/firestore/lite';

const ExpandMore = styled((props) => {


  const { expand, ...other } = props;
  return <IconButton {...other} />;
  })
  (({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}
));



export default function Item() {

const [products, setProducts] = useState([{}])
const [loading, setLoading] = useState(true)

useEffect(()  => {
  if (!loading){
    setLoading(true)
    getDocs(collection(db, 'Items')).then((querySnapshot) => {
      const products = querySnapshot.docs.map(doc => {
        return {id: doc.id, ... doc.data()}
      })
      console.log(products)
      setProducts(products)
    })
  }else{
    setLoading(false)
  }},
[])

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function imageURL(n){
    return ("./fotos/" + products[n].idImagen)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={products[0].Producto}
        subheader="Solo stock disponible en visón"
      />
      
      <CardMedia
        component="img"
        height="350"
        image={imageURL(0)}
        alt="Bota"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {products[0].Descripcion}
        </Typography>
      </CardContent>
      ${products[0].Precio}
      <LocalOfferIcon />
        
      <CardActions disableSpacing>
        Añadir al carrito
        <IconButton aria-label="add to favorites">
          <ShoppingCartIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>Este modelo es de Cuero Gamuzado, su altura es regulable y su taco es de 8cm.
          ¡No te quedes sin el tuyo!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
