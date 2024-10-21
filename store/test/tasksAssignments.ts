// //

// //

// import { createAsyncThunk } from "@reduxjs/toolkit";

// import { TaskAssignment } from "@/interfaces/tasksAssignment";
// import { createClient } from "@/utils/supabase/client";

// export interface TaskAssignmentState {
//     items: TaskAssignment[];
//     status: "idle" | "loading" | "succeeded" | "failed";
//     error: string | null;
// }

// export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
//     const supabase = createClient();
//     const { data, error } = await supabase.from("tasks").select("*");
//     if (error) throw error;
//     return data as TaskAssignment[];
// });

// export const fetchTasksById = createAsyncThunk(
//     "fetchTasksById",
//     async ({ id, project_id }: { id: string; project_id: string }) => {
//         const supabase = createClient();
//         const { data, error } = await supabase.from("tasks").select("*").eq("project_id", project_id).eq("id", id);
//         if (error) throw error;
//         return data as TaskAssignment[];
//     }
// );

// export const deleteTasksById = createAsyncThunk(
//     "deleteTasksById",
//     async ({ id, project_id }: { id: string; project_id: string }) => {
//         const supabase = createClient();
//         const { error } = await supabase.from("tasks").delete().eq("project_id", project_id).eq("id", id);
//         if (error) throw error;
//         return { id };
//     }
// );

// export const addTask = createAsyncThunk("addTasks", async (newTask: Omit<TaskAssignment, "id" | "created_at">) => {
//     const supabase = createClient();
//     const { data, error } = await supabase.from("tasks").insert([newTask]).select().single();
//     if (error) throw error;
//     return data as TaskAssignment;
// });
