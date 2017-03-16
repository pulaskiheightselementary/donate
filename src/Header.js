import React from 'react';

import gardenHero from './images/garden-hero.jpg';

import Row from './Row';

const Header = ({ alt, hero, text }) => (
	<div>
		<Row>
			<img
				alt={alt}
				className="u-max-full-width u-margin-top-large"
				src={hero}
			/>
		</Row>

		<Row>
			<h4 className="u-margin-top-large">{text}</h4>
		</Row>
	</div>
);

Header.propTypes = {
	alt: React.PropTypes.string,
	hero: React.PropTypes.string,
	text: React.PropTypes.node
};

Header.defaultProps = {
	alt: 'Children overseeing the the growth of cabbage in the garden.',
	hero: gardenHero,
	text: 'At Pulaski Heights Elementary we believe in partnering with parents, families, friends and the district to foster the growth, creativity, and academic excellence of all children. Donating to PHE PTA supports our kids, our community, and our future.'
};

export default Header;
