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
const [productList,setProductList] = useState([])

useEffect(()  => {
  if (!loading){
    setLoading(true)
    getDocs(collection(db, 'Items')).then((querySnapshot) => {
      const products = querySnapshot.docs.map(doc => {
        return {id: doc.id, ... doc.data()}
      })
      console.log(products)
      setProducts(products)

      setProductList(products.map((index) => {
        return <Card sx={{ maxWidth: 345 }}>
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
            <Typography>{index.Descripcion}
            </Typography>

          </CardContent>
        </Collapse>
      </Card>  
      }))
    })
  }else{
    setLoading(false)
  }},
[products])

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function imageURL(n){
    return ("./fotos/" + products[n].idImagen)
  }


  // Lo que debemos hacer es un ciclo for o foreach para que en el return se muestren 8 items en vez de solo el primero
  
  return productList
  
}
