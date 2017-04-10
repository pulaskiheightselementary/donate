import React from 'react';

import Header from './components/header';
import TileGrid from './components/tile-grid';
import { campaigns } from './data';

const App = () => (
  <div>
    <Header
      text="At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future."
      url="/about"
    />

    <TileGrid collection={campaigns} />
  </div>
);

export default App;
