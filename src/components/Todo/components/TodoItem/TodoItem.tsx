import { useAppDispatch } from "../../../../hooks/redux-hooks";
import { toggleTodoComplete, removeTodo } from "../../../../store/slices/todoSlices"
import { MdDone } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'
import styled from './TodoItem.module.css'
import { useState } from "react";

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    if (!completed) {
      dispatch(toggleTodoComplete(id));
    }
  };

  return (
    <div className={styled.todo__item}>
      <span>{title}</span>
      <div>
        {!completed ? (
          <span onClick={handleToggleComplete}>
            <MdDone />
          </span>
        ) : null}
        <span onClick={() => dispatch(removeTodo(id))}>
          <AiFillDelete />
        </span>
      </div>
    </div>
  );
};


export { TodoItem }
