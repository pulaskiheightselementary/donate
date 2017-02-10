import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <img className="u-max-full-width" src="images/hero.jpg" style={{ marginTop: '5%' }} />
        </div>

        <div className="row">
          <h4 style={{ marginTop: '5%' }}>At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future.</h4>
        </div>
      </div>
    );
  }
}

export default App;
