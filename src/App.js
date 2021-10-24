import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import CheckoutCard from './components/CheckoutCard';
import CheckoutPage from './components/CheckoutPage';
import { Footer } from './components/Footer';



function App() {
  return (
    <div className="App">
      <h1>NinnaByAc</h1>
      <ItemList />
      <NavBar />
      <CheckoutCard />
      <CheckoutPage />
      <Footer />
    </div>
  );
}

export default App;



