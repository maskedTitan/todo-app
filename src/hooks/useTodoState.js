import useLocalStoragaState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default (initialTodos) => {
	const [ todos, setTodos ] = useLocalStoragaState('todos', initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([
				...todos,
				{
					id: uuid(),
					task: newTodoText,
					completed: false
				}
			]);
		},
		removeTodo: (todoId) => {
			//filter out remove todo
			//call setTodos with new todo array
			const updatedTodos = todos.filter((todo) => todo.id !== todoId);
			setTodos(updatedTodos);
		},
		toggleTodo: (todoId) => {
			//toggles individual todo
			const updatedTodos = todos.map(
				(todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
			);
			setTodos(updatedTodos);
		},
		editTodo: (updatedTodo, todoId) => {
			const updatedTodoList = todos.map((todo) => (todo.id === todoId ? { ...todo, task: updatedTodo } : todo));
			setTodos(updatedTodoList);
		}
	};
};
