import styled from './TodoList.module.css'
import { useAppSelector } from '../../../../hooks/redux-hooks'
import { TodoListContainer } from '../TodoListContainer/TodoListContainer';

export const TodoList: React.FC = () => {
	const todos = useAppSelector((state) => state.todos.list);
	const completedList = useAppSelector((state) => state.todos.completedList);

	return (
		<div className={styled.container}>
			<TodoListContainer list={todos} heading="Active Tasks" />
			<TodoListContainer list={completedList} heading="Completed Tasks" />
		</div>
	);
};
