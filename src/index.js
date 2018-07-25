import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';
import UserInfo from './components/UserInfo'

const middleware = [ thunk ];

const store = createStore(reducer, applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
  <UserInfo/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
