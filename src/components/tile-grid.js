import React from 'react';

import Row from './row';
import Tile from './tile';

function getGrid(collection, items = []) {
	const newCollection = [...collection];
	const firstItem = newCollection.shift();
	const secondItem = newCollection.shift();

	if (firstItem === undefined) return items;

	return getGrid(newCollection, [
		...items,
		(
			<Row key={`${firstItem.key}-row`}>
				<Tile url={`/donate/${firstItem.key}`} {...firstItem} />
				{secondItem && <Tile url={`/donate/${secondItem.key}`} {...secondItem} />}
			</Row>
		)
	]);
}

const TileGrid = ({ collection }) => (
	<div>
		{getGrid(collection)}
	</div>
);

TileGrid.propTypes = {
	collection: React.PropTypes.array.isRequired
};

export default TileGrid;
