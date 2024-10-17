//

import { createAsyncThunk } from "@reduxjs/toolkit";

import { Comment } from "@/interfaces/comment";
import { addItem, deleteItemById, fetchItemById, fetchItems } from "@/utils/supabase/supabaseHelpers";

export interface commentsState {
    items: Comment[];
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}
export const fetchComments = createAsyncThunk("fetchComments", async () => {
    return await fetchItems<Comment>("comments");
});

export const fetchCommentsById = createAsyncThunk(
    "fetchCommentById",
    async ({ id, userId }: { id: string; userId: string }) => {
        return await fetchItemById<Comment>("comments", "owner_id", userId);
    }
);

export const deleteCommentById = createAsyncThunk(
    "deleteCommnentsById",
    async ({ id, userId }: { id: string; userId: string }) => {
        return await deleteItemById("comments", "owner_id", userId);
    }
);

export const addcomment = createAsyncThunk("addComment", async (comment: Omit<Comment, "id" | "created_at">) => {
    return await addItem<Comment>("comments", comment);
});
