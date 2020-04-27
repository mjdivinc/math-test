import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Router} from 'react-router-dom';
import { Redirect, Route } from 'react-router';
import './index.css';
//import App from './App';
import HomeScreen from './Components/HomeScreen.js';
import * as serviceWorker from './serviceWorker';
import Test from './Components/Test';
import Results from './Components/Results';

const customHistory = createBrowserHistory();

const routing = (
  <Router history={customHistory}>
    <div>
      <Redirect from="/" to="/home" />
      <Route path="/home" component={HomeScreen} />
      <Route path="/addition" component={Test} />
      <Route path="/subtraction" component={Test} />
      <Route path="/results" component={Results} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
