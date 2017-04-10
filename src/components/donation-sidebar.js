import React from 'react';

import Back from './back';

const DonationSidebar = ({ description }) => (
	<div style={{ marginBottom: '2.5rem' }}>
		<p>{description}</p>

		<p><strong>Become a sustaining partner of PHE. </strong>Consider choosing a monthly contribution to make the most difference. As a recurring donor you will receive quarterly updates on how your money is making a difference at PHE.</p>

		<Back desktop />
	</div>
);

DonationSidebar.propTypes = {
	description: React.PropTypes.string
};

export default DonationSidebar;
