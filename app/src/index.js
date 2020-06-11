import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';
import {characterReducer} from './reducers/characterReducer'
import logger from './middleware/logger'

const store = createStore(characterReducer, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


