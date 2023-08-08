import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "task",
    initialState: { 
        data: [],
        isEditMode: false,
        taskToEdit: {},
        initialValue: ''
     },
    reducers: {
        addTask(state, action) {
            if(!state.isEditMode) {
                state.data.push({
                    name: action.payload,
                    id: nanoid()
                });
            } else {
                state.data.map((task) => {
                    if(task.id === state.taskToEdit.id) {
                        task.name = action.payload;
                    }
                    state.isEditMode = false;
                });
            }
        },

        removeTask(state, action) {
            state.data = state.data.filter((task) => {
                return task.id !== action.payload.id;
            });
        },

        editTask(state, action) {
            state.initialValue = action.payload.name;
            state.isEditMode = true;
            state.taskToEdit = action.payload;
            document.querySelector('.form-input').focus();
        }
    }
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask, editTask } = tasksSlice.actions;