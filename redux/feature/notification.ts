import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addProject, deleteProjectsById, fetchProjects, fetchProjectsById, ProjectsState } from "../actions/projects";
import { Project } from "@/interfaces/projects";

export const initialState: ProjectsState = {
    items: [],
    status: "idle",
    error: null,
};

const handlePending = (state: ProjectsState) => {
    state.status = "loading";
    state.error = null;
};

const handleRejected = (state: ProjectsState, action: PayloadAction<any>) => {
    state.status = "failed";
    state.error = action.payload?.message ?? "Unknown error occurred";
};

const handleFetchFulfilled = (state: ProjectsState, action: PayloadAction<Project[]>) => {
    state.status = "succeeded";
    state.items = action.payload;
    state.error = null;
};

const handleDeleteByIdFulfilled = (state: ProjectsState, action: PayloadAction<{ id: string }>) => {
    state.status = "succeeded";
    state.items = state.items.filter((project) => project.id !== action.payload.id);
    state.error = null;
};

export const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, handlePending)
            .addCase(fetchProjects.fulfilled, handleFetchFulfilled)
            .addCase(fetchProjects.rejected, handleRejected)

            .addCase(fetchProjectsById.pending, handlePending)
            .addCase(fetchProjectsById.fulfilled, handleFetchFulfilled)
            .addCase(fetchProjectsById.rejected, handleRejected)

            .addCase(deleteProjectsById.pending, handlePending)
            .addCase(deleteProjectsById.fulfilled, handleDeleteByIdFulfilled)
            .addCase(deleteProjectsById.rejected, handleRejected)

            .addCase(addProject.pending, handlePending)
            .addCase(addProject.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(addProject.rejected, handleRejected);
    },
});
