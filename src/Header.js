import React from 'react';

import hero from './images/hero.jpg';

import Row from './Row';

const Header = ({ children }) => (
	<div>
		<Row>
      <img
        alt="Children overseeing the the growth of cabbage in the garden."
        className="u-max-full-width"
        src={hero}
        style={{ marginTop: '5%' }}
      />
    </Row>

    <Row>
      <h4 style={{ marginTop: '5%' }}>{children}</h4>
    </Row>
	</div>
);

export default Header;
