import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import About from './About';

import './normalize.css';
import './skeleton.css';

ReactDOM.render(
  <Router>
    <div className="u-margin-top-x-large">
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>,
  document.getElementById('root')
);
