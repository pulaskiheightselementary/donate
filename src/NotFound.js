import React from 'react';

import Button from './components/button';

const NotFound = () => (
	<div>
		<h4 className="u-margin-top-medium">Oops! Looks like this link doesn't exist.</h4>

		<div className="u-margin-bottom-x-large">
			<Button isPrimary url="/">Go Back</Button>
		</div>
	</div>
);

export default NotFound;
