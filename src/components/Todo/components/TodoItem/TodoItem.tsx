import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { toggleTodoComplete, removeTodo } from "../../../../store/slices/todoSlices"
import { BsCheckCircle } from 'react-icons/bs'
import { MdDone } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import styled from './TodoItem.module.css'

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styled.todo__item}>
      <span>{title}</span>
      <div>
        <span onClick={() => dispatch(toggleTodoComplete(id))}><MdDone /></span>
        <span onClick={() => dispatch(removeTodo(id))}> <AiFillDelete /></span>
      </div>
    </div>
  );
};

export { TodoItem }
