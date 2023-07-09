import { createSlice, nanoid } from "@reduxjs/toolkit";
import axios from 'axios';

const tasksSlice = createSlice({
    name: "task",
    initialState: { data: [] },
    reducers: {
        addTask(state, action) {
            state.data.push({
                name: action.payload,
                id: nanoid()
            });
        },

        removeTask(state, action) {
            state.data = state.data.filter((task) => {
                return task.id !== action.payload.id;
            });
        }
    }
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask } = tasksSlice.actions;