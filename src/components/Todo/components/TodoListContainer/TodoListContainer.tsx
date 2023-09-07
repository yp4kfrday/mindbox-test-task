import styled from './TodoListContainter.module.css'
import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../../../store/slices/todoSlices';

interface TodoListProps {
	list: Todo[];
	heading: string;
}

export const TodoListContainer: React.FC<TodoListProps> = ({ list, heading }) => (
	<div className={styled.todos}>
		<span className={styled.heading}>{heading}</span>
		{list.map((todo) => (
			<TodoItem key={todo.id} {...todo} />
		))}
	</div>
);
