import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import About from './About';
import Donate from './Donate';
import Footer from './Footer';
import Home from './Home';
import NotFound from './NotFound';
import ScrollToTop from './components/scroll-to-top';

import './normalize.css';
import './skeleton.css';
import './custom.css';

ReactGA.initialize('UA-96860345-1');
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname);

const script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://donorbox.org/widget.js';
document.body.appendChild(script);

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <div className="u-margin-top-x-large">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path='/donate/:campaignKey' component={Donate}/>
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </div>
      </div>
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
