import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import CheckoutCard from './components/CheckoutCard';
import CartWidget from './components/CartWidget';
import {Footer} from './components/Footer';
import {Switch, BrowserRouter, Route} from 'react-router-dom';
import Item from "./components/Item";
import CheckoutPage from "./components/CartWidget";
import { Form } from './components/Form';
import { PantallaFinal } from './components/PantallaFinal';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <h1>NinnaByAc</h1>
                <Switch>
                    <Route path="/home">
                        <ItemList/>
                    </Route>
                    <Route path="/checkout-page">
                        <CheckoutPage/>
                    </Route>
                    <Route path="/form">
                      <Form />
                    </Route>
                    <Route path="/cuero">
                    <ItemList/>
                    </Route>
                    <Route path="/gamuza">
                    <ItemList/>
                    </Route>
                    <Route path="/eco-cuero">
                    <ItemList/>
                    </Route>
                    <Route path="/pantalla-final">
                    <PantallaFinal />
                    </Route>
                </Switch>
                <NavBar/>
                <Footer/>
                
            </div>
        </BrowserRouter>
    );
}

export default App;



