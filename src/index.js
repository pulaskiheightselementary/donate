import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Donate from './Donate';
import NotFound from './NotFound';

import './normalize.css';
import './skeleton.css';
import './custom.css';

ReactGA.initialize('UA-96860345-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

ReactDOM.render(
  <Router onUpdate={logPageView}>
    <div className="u-margin-top-x-large">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path='/donate/:campaignKey' component={Donate}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
