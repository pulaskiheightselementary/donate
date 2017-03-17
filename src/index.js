import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Router>
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
