import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

const Button = ({ children, className, onClick, isPrimary, url }) => (
	<Link className={classnames(
		'button',
		{
			'button-primary': isPrimary
		},
		className
	)} onClick={onClick} to={url}>{children}</Link>
);

Button.propTypes = {
	className: React.PropTypes.string,
	isPrimary: React.PropTypes.bool,
	url: React.PropTypes.string.isRequired
};

Button.defaultProps = {
	url: '/'
};

export default Button;
