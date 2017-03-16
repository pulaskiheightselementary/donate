import React from 'react';

import './Home.css';

import Header from './Header';
import Row from './Row';
import Tile from './Tile';

const App = () => (
  <div className="container">
    <Header />
    <Row>
      <Tile />
      <Tile />
    </Row>
  </div>
);

export default App;
