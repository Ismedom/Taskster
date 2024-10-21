// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Task } from "../../interfaces/tasks";
// import { RootState } from "../store";
// import { TaskAssignmentState } from "../actions/tasksAssignments";
// import { fetchTasks } from "../actions/tasks";
// import { TaskAssignment } from "@/interfaces/tasksAssignment";

// export const initialState: TaskAssignmentState = {
//     items: [],
//     status: "idle",
//     error: null,
// };

// export const projectsSlice = createSlice({
//     name: "projects",
//     initialState,
//     reducers: {
//         resetStatus: (state) => {
//             state.status = "idle";
//             state.error = null;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             // Fetch All Projects
//             .addCase(fetchTasks.pending, (state) => {
//                 state.status = "loading";
//                 state.error = null;
//             })
//             .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskAssignment[]>) => {
//                 state.status = "succeeded";
//                 state.items = action.payload;
//                 state.error = null;
//             })
//             .addCase(fetchTasks.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message ?? "Unknown error occurred";
//             })

//             // Fetch Projects By ID
//             .addCase(fetchTasksById.pending, (state) => {
//                 state.status = "loading";
//                 state.error = null;
//             })
//             .addCase(fetchTasksById.fulfilled, (state, action: PayloadAction<Task[]>) => {
//                 state.status = "succeeded";

//                 const fetchedProjects = action.payload;
//                 fetchedProjects.forEach((fetchedProject) => {
//                     const existingIndex = state.items.findIndex((project) => project.id === fetchedProject.id);
//                     if (existingIndex >= 0) {
//                         state.items[existingIndex] = fetchedProject;
//                     } else {
//                         state.items.push(fetchedProject);
//                     }
//                 });
//                 state.error = null;
//             })
//             .addCase(fetchTasksById.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message ?? "Failed to fetch project";
//             })

//             // Delete Project
//             .addCase(deleteTasksById.pending, (state) => {
//                 state.status = "loading";
//                 state.error = null;
//             })
//             .addCase(deleteTasksById.fulfilled, (state, action: PayloadAction<{ id: string }>) => {
//                 state.status = "succeeded";
//                 state.items = state.items.filter((project) => project.id !== action.payload.id);
//                 state.error = null;
//             })
//             .addCase(deleteTasksById.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message ?? "Failed to delete project";
//             })
//             //add project
//             .addCase(addTask.pending, (state) => {
//                 state.status = "loading";
//                 state.error = null;
//             })
//             .addCase(addTask.fulfilled, (state, action: PayloadAction<Task>) => {
//                 state.status = "succeeded";
//                 state.items.push(action.payload);
//                 state.error = null;
//             })
//             .addCase(addTask.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message ?? "Failed to add project";
//             });
//     },
// });

// export const { resetStatus } = projectsSlice.actions;
// export const selectAllProjects = (state: RootState) => state.projects.items;
// export const selectProjectsStatus = (state: RootState) => state.projects.status;
// export const selectProjectsError = (state: RootState) => state.projects.error;
// export const selectProjectById = (state: RootState, projectId: string) =>
//     state.projects.items.find((project) => project.id === projectId);

// export default projectsSlice.reducer;
