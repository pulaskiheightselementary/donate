import React from 'react';
import ReactGA from 'react-ga';

import Button from './button';

function logEvent () {
	ReactGA.event({
		category: 'Donate',
		action: 'Returned To The List'
	});
}

const DonationSidebar = ({ description }) => (
	<div>
		<p>{description}</p>

		<Button onClick={logEvent} url="/">See Other Opportunities</Button>
	</div>
);

DonationSidebar.propTypes = {
	description: React.PropTypes.string
};

export default DonationSidebar;
