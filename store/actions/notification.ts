//

import { createAsyncThunk } from "@reduxjs/toolkit";
import { Project } from "../../interfaces/projects";
import { addItem, deleteItemById, fetchItemById, fetchItems } from "@/supabase/supabaseHelpers";

export interface ProjectsState {
    items: Project[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
export const fetchProjects = createAsyncThunk("fetchProjects", async () => {
    return await fetchItems<Project>("projects");
});

export const fetchProjectsById = createAsyncThunk(
    "fetchProjectsById",
    async ({ id, userId }: { id: string; userId: string }) => {
        return await fetchItemById<Project>("projects", "owner_id", userId);
    }
);

export const deleteProjectsById = createAsyncThunk(
    "deleteProjectsById",
    async ({ id, userId }: { id: string; userId: string }) => {
        return await deleteItemById("projects", "owner_id", userId, "id", id);
    }
);

export const addProject = createAsyncThunk("addProject", async (newProject: Omit<Project, "id" | "created_at">) => {
    return await addItem<Project>("projects", newProject);
});
