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

				{currentCampaign.embedCode && <iframe
					frameBorder="0"
					height="685px"
					id="dbox-form-embed"
					name="donorbox"
					scrolling="no"
					seamless
					src={`https://donorbox.org/embed/${currentCampaign.embedCode}?hide_donation_meter=true`}
					style={{ maxWidth: '100%', minWidth: '310px' }}
					width="100%"
				/>}

			</div>
		);
	}

	return <NotFound />;
};

export default Donate;
