import React from 'react';

const SINGULAR = ['one', 'one-half', 'one-third'];

function getClassName (size) {
	return `${size} ${SINGULAR.includes(size) ? 'column' : 'columns'}`
};

const Column = ({ children, size }) => (
	<div className={getClassName(size)}>
		{children}
	</div>
);

Column.propTypes = {
	size: React.PropTypes.oneOf([
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'one-third',
		'one-half'
	]).isRequired
};

Column.defaultProps = {
	size: 'one'
};

export default Column;
