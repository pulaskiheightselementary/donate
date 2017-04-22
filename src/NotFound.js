import DocumentTitle from 'react-document-title';
import React from 'react';

import Button from './components/button';

const NotFound = () => (
	<DocumentTitle title='Support Pulaski Heights Elementary in Little Rock, AR'>
		<div>
			<h4 className="u-margin-top-medium">Oops! Looks like this link doesn't exist.</h4>

			<div className="u-margin-bottom-x-large">
				<Button isPrimary url="/">Go Back</Button>
			</div>
		</div>
	</DocumentTitle>
);

export default NotFound;
