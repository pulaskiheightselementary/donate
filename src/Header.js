import React from 'react';

import Row from './Row';

const Header = ({ alt, hero, text, url }) => (
	<div className="u-margin-top-x-large">
		{hero &&
			<Row>
					<figure style={{ margin: 0, padding: 0, maxHeight: '256px', overflow: 'hidden' }}>
						<img
							alt={alt}
							className="u-max-full-width"
							src={hero}
						/>
					</figure>
			</Row>
		}

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
