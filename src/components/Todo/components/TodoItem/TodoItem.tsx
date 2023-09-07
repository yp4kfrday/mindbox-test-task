/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import styled from './TodoItem.module.css'
import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { toggleTodoComplete, removeTodo } from "../../../../store/slices/todoSlices"
import { MdDone } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'

interface TodoItemProps {
	id: string,
	title: string,
	completed: boolean,
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
	const dispatch = useAppDispatch();

	const handleToggleComplete = () => {
		!completed && dispatch(toggleTodoComplete(id));
	};

	return (
		<div className={styled.todo__item}>
			<span className={styled.todo__title}>{title}</span>
			<div>
				{!completed && (
					<span className={styled.icon} onClick={handleToggleComplete}>
						<MdDone />
					</span>
				)}
				<span className={styled.icon} onClick={() => dispatch(removeTodo(id))}>
					<AiFillDelete />
				</span>
			</div>
		</div>
	);
};