//

//
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../../interfaces/tasks";
import { addItem, deleteItemById, fetchItemById, fetchItems } from "@/utils/supabase/supabaseHelpers";

export interface tasksState {
    items: Task[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
    return await fetchItems<Task>("tasks");
});

export const fetchTasksById = createAsyncThunk(
    "fetchTasksById",
    async ({ id, project_id }: { id: string; project_id: string }) => {
        return await fetchItemById<Task>("tasks", "project_id", project_id);
    }
);

export const deleteTasksById = createAsyncThunk(
    "deleteTasksById",
    async ({ id, project_id }: { id: string; project_id: string }) => {
        return await deleteItemById("tasks", "project_id", project_id);
    }
);

export const addTask = createAsyncThunk("addTasks", async (newTask: Omit<Task, "id" | "created_at">) => {
    return await addItem<Task>("tasks", newTask);
});
