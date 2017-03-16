import React from 'react';

import Column from './Column';

const Tile = ({ children, description, img, title }) => (
	<Column size="one-half">
		<img
			alt={title}
			className="u-max-full-width"
			src={img}
		/>
		<p className="u-margin-top-small"><strong>{title}.</strong> {description || children}</p>
	</Column>
);

export default Tile;
