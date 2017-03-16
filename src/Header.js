import React from 'react';

import Row from './Row';

const Header = ({ alt, hero, text, url }) => (
	<div>
		<Row>
			<img
				alt={alt}
				className="u-max-full-width u-margin-top-x-large"
				src={hero}
			/>
		</Row>

		<Row>
			<h4 className="u-margin-top-medium">{text}</h4>
			<a className="button" href={url}>About The PTA</a>
		</Row>
	</div>
);

Header.propTypes = {
	alt: React.PropTypes.string,
	hero: React.PropTypes.string,
	text: React.PropTypes.node,
	url: React.PropTypes.string
};

export default Header;
