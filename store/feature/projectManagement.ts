import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    isOpenProjectBoard: false,
};

export const projectsManagementSlice = createSlice({
    name: "projectsManagement",
    initialState,
    reducers: {
        closeProjectBoard: (state) => {
            state.isOpenProjectBoard = false;
        },
        openProjectBoard: (state) => {
            state.isOpenProjectBoard = true;
        },
        isToggleProjectBoard: (state) => {
            state.isOpenProjectBoard = !state.isOpenProjectBoard;
        },
    },
});

export const { closeProjectBoard, openProjectBoard, isToggleProjectBoard } = projectsManagementSlice.actions;

export const selectIsOpenProjectBoard = (state: RootState) => state.projectsManagement.isOpenProjectBoard;

export default projectsManagementSlice.reducer;
