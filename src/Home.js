import React from 'react';

import './Home.css';

import Header from './components/header';
import TileGrid from './components/tile-grid';
import Footer from './components/footer';
import { programs } from './data';

const App = () => (
  <div className="container">
    <Header
      text="At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future."
      url="/about"
    />

    <TileGrid collection={programs} />

    <Footer>
      To help the greatest number of children and ensure that no gift is wasted, funds raised on this page will be used to support programs in the greatest imminent need. 100% of funds support the endeavors of the PHE PTA as we strive to make our school a great choice for all families.
    </Footer>
  </div>
);

export default App;
