import React from 'react';
import ReactGA from 'react-ga';
import classnames from 'classnames';

import Button from './button';

function logEvent () {
	ReactGA.event({
		category: 'Donate',
		action: 'Returned To The List'
	});
}

const Back = ({ className, mobile, desktop }) => (
	<Button
		className={classnames({
			'u-hidden-on-mobile': desktop,
			'u-hidden-on-tablet': mobile
		},
		className)}
		onClick={logEvent}
		url="/">
			See Other Opportunities
	</Button>
);

Back.propTypes = {
	className: React.PropTypes.string,
	mobile: React.PropTypes.bool,
	desktop: React.PropTypes.bool
};

export default Back;
