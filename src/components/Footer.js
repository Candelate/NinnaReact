import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';


export  const Footer=() =>{
    return(
        <div>
        <footer class="footerPago">
              <div>
                <h3 class="pagos">Pagos con todas la tarjetas de credito</h3> 
            </div>
            <div class="logoTarjetasContainer">
              <img src="./logosTarjetas/cabal.png" alt=""/>
              <img src="./logosTarjetas/american-express.png" alt=""/>
              <img src="./logosTarjetas/link.png" alt=""/>
              <img src="./logosTarjetas/naranja.png" alt=""/>
              <img src="./logosTarjetas/nativa.png" alt=""/>
              <img src="./logosTarjetas/mastercard.jpg" alt=""/>
            </div>
            <div class="contacto">
              <p>Pordes contactarte al 1155667788 ante cualquier duda de Lunes a Viernes de 10 a 17hs.</p>
            </div> 
            <div>
               <IconButton>
                   <InstagramIcon IconfontSize= "large"/>
                </IconButton> 		
			     </div> 
        </footer>
    </div>
    )
}
