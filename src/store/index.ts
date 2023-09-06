import { configureStore } from '@reduxjs/toolkit';
import { useReducer } from 'react';
import todoSlices from './slices/todoSlices';

export const store = configureStore({
    reducer: {
        todos: todoSlices
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; 