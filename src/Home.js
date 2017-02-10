import React, { Component } from 'react';
import './Home.css';

import hero from './images/hero.jpg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img
            alt="Children overseeing the the growth of cabbage in the garden."
            className="u-max-full-width"
            src={hero}
            style={{ marginTop: '5%' }}
          />
        </div>

        <div className="row">
          <h4 style={{ marginTop: '5%' }}>At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future.</h4>
        </div>
      </div>
    );
  }
}

export default App;
