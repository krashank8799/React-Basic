import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
//import { createStore } from 'redux'
//import Reducer from './reducers';
//import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const store = createStore(Reducer)
root.render( <
    BrowserRouter >

    <
    App / >
    <
    /
    BrowserRouter >
);