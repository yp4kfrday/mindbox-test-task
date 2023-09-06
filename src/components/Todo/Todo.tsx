import React, { useState } from "react"
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addTodo } from "../../store/slices/todoSlices";
import { InputField, TodoList } from "./components";
import styled from './Todo.module.css'

const Todo: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText('');
        }
    }
    
    return (
            <div className={styled.todo}>
                <span className={styled.heading}>ToDo</span>
                <InputField
                    value={text}
                    updateText={setText}
                    handleAction={handleAction}
                />
                <TodoList />
            </div>
    )
}

export { Todo } 