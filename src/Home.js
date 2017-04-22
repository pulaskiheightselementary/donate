import DocumentTitle from 'react-document-title';
import React from 'react';

import Header from './components/header';
import TileGrid from './components/tile-grid';
import { campaigns } from './data';

const App = () => (
  <DocumentTitle title='Support Pulaski Heights Elementary in Little Rock, AR'>
    <div>
      <Header
        text="At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future."
        url="/about"
      />

      <TileGrid collection={campaigns} />
    </div>
  </DocumentTitle>
);

export default App;
