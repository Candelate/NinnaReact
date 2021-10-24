import './App.css';
import NavBar from './components/NavBar';
import Item from './components/Item'
import ItemList from './components/ItemList';
import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';



function App() {
  return (
    <div className="App">
      <h1>NinnaByAc</h1>
      <Item />
      <ItemList />
      <NavBar />
      <CheckoutCard />
      <CheckoutPage />

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
          </footer>
      </div>


    </div>
  );
}

export default App;
