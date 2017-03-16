import React from 'react';

import Column from './Column';

const Tile = ({ children, description, img, title, url }) => (
	<Column size="one-half">
		<hr className="u-hidden-on-desktop u-margin-top-x-large u-margin-bottom-large" />
		<img
			alt={title}
			className="u-max-full-width u-margin-top-x-large"
			src={img}
		/>
		<div className="u-margin-top-small u-margin-bottom-medium">
			<strong>{title}. </strong>
			{description || children}
		</div>
		<a className="button button-primary" href={url}>Donate</a>
	</Column>
);

Tile.propTypes = {
	description: React.PropTypes.string,
	img: React.PropTypes.string,
	title: React.PropTypes.string,
	url: React.PropTypes.string
};

Tile.defaultProps = {
	url: '#'
};

export default Tile;
