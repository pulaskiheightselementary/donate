import React from 'react';

import NotFound from './NotFound';
import { campaigns } from './data';

const Donate = ({ match }) => {
	const campaignKey = match.params.campaignKey;
	const currentCampaign = campaigns.find((campaign) => campaign.key === campaignKey);

	if (currentCampaign) {
		return (
			<div className="container">
				<h4 className="u-margin-top-medium">{currentCampaign.title}</h4>

				<p>{currentCampaign.description}</p>

			</div>
		);
	}

	return <NotFound />;
};

export default Donate;
