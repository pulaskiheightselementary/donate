import React from 'react';

import Back from './back';

const DonationSidebar = ({ description, donateImg, title }) => (
	<div>
		<img
			alt=""
			className="u-max-full-width"
			src={donateImg}
		/>

		<div className="u-margin-top-small u-margin-bottom-medium">
			<p>{description}</p>

			<p><strong>Become a sustaining partner of PHE. </strong>Consider choosing a monthly contribution to make the most difference. As a recurring donor you will receive quarterly updates on how your money is making a difference at PHE.</p>

			<Back desktop />
		</div>
	</div>
);

DonationSidebar.propTypes = {
	description: React.PropTypes.string,
	donateImg: React.PropTypes.string,
	title: React.PropTypes.string
};

export default DonationSidebar;
