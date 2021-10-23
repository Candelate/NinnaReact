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

    </div>
  );
}

export default App;
