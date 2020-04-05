import React, { Fragment } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodo from './EditTodo';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Iconbutton from '@material-ui/core/Iconbutton';
import DeleteIcon from '@material-ui/icons/Delete';
import Editcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default (props) => {
	const [ isEditing, toggle ] = useToggleState(false);
	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodo editTodo={props.editTodo} id={props.id} task={props.task} toggleEdit={toggle} />
			) : (
				<Fragment>
					<Checkbox tabIndex={-1} checked={props.completed} onClick={() => props.toggleTodo(props.id)} />
					<ListItemText style={{ textDecoration: props.completed ? 'line-through' : '' }}>
						{props.task}
					</ListItemText>
					<ListItemSecondaryAction>
						<Iconbutton aria-label='delete' onClick={() => props.removeTodo(props.id)}>
							<DeleteIcon />
						</Iconbutton>
						<Iconbutton aria-label='edit' onClick={toggle}>
							<Editcon />
						</Iconbutton>
					</ListItemSecondaryAction>
				</Fragment>
			)}
		</ListItem>
	);
};
