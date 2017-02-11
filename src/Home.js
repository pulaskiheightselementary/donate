import React from 'react';

import './Home.css';

import Header from './Header';
import Row from './Row';
import Tile from './Tile';

const App = () => (
  <div className="container">
    <Header>
      At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future.
    </Header>
    <Row>
      <Tile />
    </Row>
  </div>
);

export default App;
