import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./feature/projects";
import tasksReducer from "./feature/tasks";
import commentReducer from "./feature/comment";
import tasksAssignmentReducer from "./feature/taskAssignment";

export const store = configureStore({
    reducer: {
        projects: projectReducer,
        tasks: tasksReducer,
        comments: commentReducer,
        tasksAssignment: tasksAssignmentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
