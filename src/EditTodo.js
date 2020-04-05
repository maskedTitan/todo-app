import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

export default (props) => {
	const [ value, handleChange, reset ] = useInputState(props.task);
	return (
		<form
			onSubmit={(evt) => {
				evt.preventDefault();
				props.editTodo(value, props.id);
				reset();
				props.toggleEdit();
			}}
			style={{ marginLeft: '1rem', width: '50%' }}
		>
			<TextField margin='normal' value={value} onChange={handleChange} fullWidth autoFocus />
		</form>
	);
};
