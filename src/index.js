import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import Reducer, { initialState } from './Reducer';



ReactDOM.render(
  <React.StrictMode>
    <StateProvider inicialState={initialState} Reducer={Reducer}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
