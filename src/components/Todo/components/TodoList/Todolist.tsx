import { useAppSelector } from '../../../../hooks/redux-hooks'
import { TodoItem } from '../TodoItem/TodoItem'
import styled from './TodoList.module.css'

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)
    const completedList = useAppSelector(state => state.todos.completedList);

    return (
        <div className={styled.container}>
            <div className={styled.todos}>
                <span className={styled.heading}>
                    Active Tasks
                </span>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                    />
                ))}
            </div>
            <div className={styled.todos}>
                <span className={styled.heading}>
                    Completed Tasks
                </span>
                {completedList.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
        </div>
    )
}

export { TodoList }
