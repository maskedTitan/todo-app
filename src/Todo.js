import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const Todo = () => {
	const initialTodos = [
		{
			id: 1,
			task: 'First Todo',
			completed: false
		}
	];
	const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

	useEffect(
		() => {
			window.localStorage.setItem('todos', JSON.stringify(todos));
		},
		[ todos ]
	);

	return (
		<div>
			<Paper style={{ padding: 0, margin: 0, height: '100vh', backgroundColor: '#FFF' }}>
				<AppBar position='static' color='primary' style={{ height: '64px' }}>
					<Toolbar>
						<Typography variant='h6' color='inherit'>
							TODO APP WITH HOOKS
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid container justify='center' style={{ marginTop: '1rem' }}>
					<Grid item xs={11} md={8} lg={4}>
						<TodoForm addTodo={addTodo} />
						<TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Todo;

//Todo
//-->TodoForm
//-->TodoList
//---->TodoItem
