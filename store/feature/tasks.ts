//

//
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTask, deleteTasksById, fetchTasks, fetchTasksById, tasksState } from "../actions/tasks";
import { Task } from "@/interfaces/tasks";
import { RootState } from "../store";

export const initialState: tasksState = {
    items: [],
    status: "idle",
    error: null,
    taskDetailId: "",
};

const handlePending = (state: tasksState) => {
    state.status = "loading";
    state.error = null;
};

const handleRejected = (state: tasksState, action: PayloadAction<any>) => {
    state.status = "failed";
    state.error = action.payload?.message ?? "Unknown error occurred";
};

const handleFetchFulfilled = (state: tasksState, action: PayloadAction<Task[]>) => {
    state.status = "succeeded";
    state.items = action.payload;
    state.error = null;
};

const handleDeleteByIdFulfilled = (state: tasksState, action: PayloadAction<{ id: string }>) => {
    state.status = "succeeded";
    state.items = state.items.filter((task) => task.id !== action.payload.id);
    state.error = null;
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
            state.error = null;
        },
        settaskDetailId: (state, action: PayloadAction<string>) => {
            state.taskDetailId = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, handlePending)
            .addCase(fetchTasks.fulfilled, handleFetchFulfilled)
            .addCase(fetchTasks.rejected, handleRejected)

            .addCase(fetchTasksById.pending, handlePending)
            .addCase(fetchTasksById.fulfilled, handleFetchFulfilled)
            .addCase(fetchTasksById.rejected, handleRejected)

            .addCase(deleteTasksById.pending, handlePending)
            .addCase(deleteTasksById.fulfilled, handleDeleteByIdFulfilled)
            .addCase(deleteTasksById.rejected, handleRejected)

            .addCase(addTask.pending, handlePending)
            .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
                state.status = "succeeded";
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(addTask.rejected, handleRejected);
    },
});

export const { resetStatus, settaskDetailId } = tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks.items;
export const selectTasksStatus = (state: RootState) => state.tasks.status;
export const selectTasksDetailId = (state: RootState) => state.tasks.taskDetailId;
export const selectTasksError = (state: RootState) => state.tasks.error;
export const selectTaskById = (state: RootState, taskId: string) =>
    state.tasks.items.find((task) => task.id === taskId);
export default tasksSlice.reducer;
