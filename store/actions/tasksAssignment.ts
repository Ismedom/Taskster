//

//
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TaskAssignment } from "@/interfaces/tasksAssignment";
import { addItem, deleteItemById, fetchItemById, fetchItems } from "@/supabase/supabaseHelpers";

export interface TaskAssignmentState {
    items: TaskAssignment[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
export const fetchTaskAssignments = createAsyncThunk("fetchTaskAssignments", async () => {
    return await fetchItems<TaskAssignment>("task_assignments");
});

export const fetchTaskAssignmentById = createAsyncThunk(
    "fetchTaskAssignmentById",
    async ({ owner_id, task_id }: { owner_id: string; task_id: string }) => {
        return await fetchItemById<TaskAssignment>("task_assignments", "task_id", task_id, "assign_from", owner_id);
    }
);

export const deleteTaskAssignmentById = createAsyncThunk(
    "deleteTaskAssignmentById",
    async ({ id, project_id }: { id: string; project_id: string }) => {
        return await deleteItemById("task_assignments", "project_id", project_id, "id", id);
    }
);

export const addTaskAssignment = createAsyncThunk(
    "addTasks",
    async (newTaskAssignment: Omit<TaskAssignment, "id" | "created_at">) => {
        return await addItem<TaskAssignment>("task_assignments", newTaskAssignment);
    }
);
