import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: string
    title: string
    completed: boolean
}

type TodoState = {
    list: Todo[];
}
 
const initialState: TodoState = {
    list: []
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            console.log(state)
            console.log(action)

            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false,
            });
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload);
        },
        toggleTodoComplete: (state, action: PayloadAction<string>) => {
            const toggledToto = state.list.find(todo => todo.id === action.payload);
            if (toggledToto) {
                toggledToto.completed = !toggledToto.completed;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions

export default todoSlice.reducer
