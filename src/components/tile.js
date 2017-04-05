import React from 'react';
import ReactGA from 'react-ga';

import Button from './button';
import Column from './column';

function logEvent (title) {
	ReactGA.event({
		category: 'Donate',
		action: 'Started Donation',
		label: title
	});
}

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
		<Button onClick={() => logEvent(title)} isPrimary url={url}>Donate</Button>
	</Column>
);

Tile.propTypes = {
	description: React.PropTypes.string,
	img: React.PropTypes.string,
	title: React.PropTypes.string,
	url: React.PropTypes.string
};

export default Tile;
