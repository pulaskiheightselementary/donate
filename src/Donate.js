import React from 'react';

import Back from './components/back';
import Row from './components/row';
import Column from './components/column';
import DonationSidebar from './components/donation-sidebar';
import NotFound from './NotFound';
import { campaigns } from './data';

const Donate = ({ match }) => {
	const campaignKey = match.params.campaignKey;
	const currentCampaign = campaigns.find((campaign) => campaign.key === campaignKey);

	if (currentCampaign) {
		return (
			<div className="container">
				<h4 className="u-margin-top-medium">
					{currentCampaign.title}
				</h4>

				{currentCampaign.embedCode
					? <Row>
						<Column reversed size="one-half">
							<DonationSidebar description={currentCampaign.description} />
						</Column>
						<Column reversed size="one-half">
							<div style={{ marginBottom: '2.5rem' }}>
								<iframe
									frameBorder="0"
									height="685px"
									id="dbox-form-embed"
									name="donorbox"
									scrolling="no"
									seamless
									src={`https://donorbox.org/embed/${currentCampaign.embedCode}?hide_donation_meter=true`}
									style={{ maxWidth: '100%', minWidth: '310px' }}
									width="100%"
								/>
								<Back mobile />
							</div>
						</Column>
					</Row>
					: <DonationSidebar description={currentCampaign.description} />}
			</div>
		);
	}

	return <NotFound />;
};

export default Donate;
