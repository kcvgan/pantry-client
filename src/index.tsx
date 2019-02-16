import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reducer } from './redux/reducers/rootReducer';
import App from './components/App';
import './index.css';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(reducer);

const app = (
  <Provider store={store}>
        <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

