import React from 'react';

import Button from './Button';
import Row from './Row';

const Header = ({ alt, hero, text, url }) => (
	<div>
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
			<Button url={url}>About The PTA</Button>
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
