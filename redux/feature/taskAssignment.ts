import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskAssignmentState } from "../test/tasksAssignments";
import { TaskAssignment } from "@/interfaces/tasksAssignment";
import {
    addTaskAssignment,
    deleteTaskAssignmentById,
    fetchTaskAssignmentById,
    fetchTaskAssignments,
} from "../actions/tasksAssignment";
import { RootState } from "../store";

export const initialState: TaskAssignmentState = {
    items: [],
    status: "idle",
    error: null,
};

const handlePending = (state: TaskAssignmentState) => {
    state.status = "loading";
    state.error = null;
};

const handleRejected = (state: TaskAssignmentState, action: PayloadAction<any>) => {
    state.status = "failed";
    state.error = action.payload?.message ?? "Unknown error occurred";
};

const handleFetchFulfilled = (state: TaskAssignmentState, action: PayloadAction<TaskAssignment[]>) => {
    state.status = "succeeded";
    state.items = action.payload;
    state.error = null;
};

const handleDeleteByIdFulfilled = (state: TaskAssignmentState, action: PayloadAction<{ id: string }>) => {
    state.status = "succeeded";
    state.items = state.items.filter((project) => project.id !== action.payload.id);
    state.error = null;
};

export const tasksAssignment = createSlice({
    name: "tasksAssignment",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTaskAssignments.pending, handlePending)
            .addCase(fetchTaskAssignments.fulfilled, handleFetchFulfilled)
            .addCase(fetchTaskAssignments.rejected, handleRejected)

            .addCase(fetchTaskAssignmentById.pending, handlePending)
            .addCase(fetchTaskAssignmentById.fulfilled, handleFetchFulfilled)
            .addCase(fetchTaskAssignmentById.rejected, handleRejected)

            .addCase(deleteTaskAssignmentById.pending, handlePending)
            .addCase(deleteTaskAssignmentById.fulfilled, handleDeleteByIdFulfilled)
            .addCase(deleteTaskAssignmentById.rejected, handleRejected)

            .addCase(addTaskAssignment.pending, handlePending)
            .addCase(addTaskAssignment.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(addTaskAssignment.rejected, handleRejected);
    },
});

export const { resetStatus } = tasksAssignment.actions;

export const selectAlltasksAssignment = (state: RootState) => state.tasksAssignment.items;
export const selecttasksAssignmentStatus = (state: RootState) => state.tasksAssignment.status;
export const selecttasksAssignmentError = (state: RootState) => state.tasksAssignment.error;
export const selecttasksAssignmentById = (state: RootState, taskId: string) =>
    state.tasksAssignment.items.find((tasksAssignment) => tasksAssignment.id === taskId);
export default tasksAssignment.reducer;
