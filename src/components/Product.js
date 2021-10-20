import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

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

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Botas Balctic, este modelo es tendencia este 2021.
        </Typography>
      </CardContent>
      $14.110
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
          aria-label="show more"
        >
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
