import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import TodoItem from './TodoItem';

import Divider from '@material-ui/core/Divider';

export const TodoList = (props) => {
	if (props.todos.length > 0) {
		return (
			<Paper>
				<List>
					{props.todos.map((todo, index) => (
						<Fragment key={todo.id}>
							<TodoItem
								{...todo}
								completed={todo.completed}
								removeTodo={props.removeTodo}
								toggleTodo={props.toggleTodo}
								editTodo={props.editTodo}
							/>
							{index < props.todos.length - 1 ? <Divider /> : ''}
						</Fragment>
					))}
				</List>
			</Paper>
		);
	} else {
		return <div />;
	}
};

export default TodoList;
