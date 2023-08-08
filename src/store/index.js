import { configureStore } from '@reduxjs/toolkit';
import { addTask, editTask, removeTask, tasksReducer } from './slices/tasksSlice';

const store = configureStore({
    reducer : {
        tasks: tasksReducer
    }
});

export { store, addTask, removeTask, editTask };