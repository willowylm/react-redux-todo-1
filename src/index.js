import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';

const middleware = [ thunk ];

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware));

ReactDOM.render(<Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
