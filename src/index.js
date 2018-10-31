import React from "react";
import { render } from 'react-dom';
import ReactDOM from "react-dom";
import Router from './Router';
 import App from './App';
import {createStore } from "redux";
import rootReducer from './Reducers'
import {Provider} from 'react-redux'
const store=createStore(rootReducer);

  
 const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
<App />
</Provider>
   ,  rootElement
);
