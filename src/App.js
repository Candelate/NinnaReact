import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import CheckoutCard from './components/CheckoutCard';
import CartWidget from './components/CartWidget';
import { Footer } from './components/Footer';



function App() {
  return (
    <div className="App">
      <h1>NinnaByAc</h1>
      <ItemList />
      <NavBar />
      <CheckoutCard />
      <CartWidget />
      <Footer />
    </div>
  );
}

export default App;



