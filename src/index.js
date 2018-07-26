import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { ConnectedRouter } from 'connected-react-router/immutable'
import {Switch, Route} from 'react-router';
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import reducer from './reducer'
import registerServiceWorker from './registerServiceWorker';
import ItemInfo from "./components/ItemInfo";

const middleware = [ thunk ];
const history = createHistory();

const store = createStore(
  connectRouter(history)(reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware, routerMiddleware(history)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/app' component={App}/>
        <Route path='/item/:id' component={ItemInfo}/>
      </Switch>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
