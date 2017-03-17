import React from 'react';

import { Link } from 'react-router-dom';

const Button = ({ children, isPrimary, url }) => (
	<Link className={`button ${isPrimary ? 'button-primary' : ''}`} to={url}>{children}</Link>
);

Button.propTypes = {
	isPrimary: React.PropTypes.bool,
	url: React.PropTypes.string.isRequired
};

Button.defaultProps = {
	url: '/'
};

export default Button;
