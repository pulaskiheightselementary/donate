import React from 'react';

const SINGULAR = ['one', 'one-half', 'one-third'];

function getClassName (size, reversed) {
	return `${size} ${SINGULAR.includes(size) ? 'column' : 'columns'} ${reversed ? 'reversed' : ''}`
};

const Column = ({ children, reversed, size }) => (
	<div className={getClassName(size, reversed)}>
		{children}
	</div>
);

Column.propTypes = {
	reversed: React.PropTypes.bool,
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
