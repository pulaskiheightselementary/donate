import React from 'react';

import phe from '../images/phe.png';

import Row from './row';
import Column from './column';

const Footer = ({ children }) => (
	<div>
		<Row>
			<hr className="u-margin-top-x-large u-margin-bottom-x-large" />
		</Row>
		<Row>
			<Column size="two">
				<a href="http://www.pulaskiheightselementary.com/" rel="external">
				<img
					alt="Pulaski Heights Elementary"
					src={phe}
					style={{ height: '72px', width: '72px' }}
				/>
			</a>
		</Column>
		<Column size="ten">
			<p style={{ fontSize: '1rem' }}>{children}</p>
		</Column>
	</Row>
</div>
);

Footer.propTypes = {
	children: React.PropTypes.node.isRequired
};

export default Footer;
