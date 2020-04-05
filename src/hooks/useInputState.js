import { useState } from 'react';

export default (initialVal) => {
	const [ value, setValue ] = useState(initialVal);
	const handleChange = (evt) => {
		setValue(evt.target.value);
	};
	const returnDot = (evt) => {
		setValue(evt.target.value.split('').map((item) => '*').toString().replace(/,/g, ''));
	};
	const reset = () => setValue('');

	return [ value, handleChange, returnDot, reset ];
};
