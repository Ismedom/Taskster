//
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addcomment, commentsState, deleteCommentById, fetchComments, fetchCommentsById } from "../actions/comment";
import { RootState } from "../store";
import { Comment } from "@/interfaces/comment";

export const initialState: commentsState = {
    items: [],
    status: "idle",
    error: null,
};

const handlePending = (state: commentsState) => {
    state.status = "loading";
    state.error = null;
};

const handleRejected = (state: commentsState, action: PayloadAction<any>) => {
    state.status = "failed";
    state.error = action.payload?.message ?? "Unknown error occurred";
};

const handleFetchFulfilled = (state: commentsState, action: PayloadAction<Comment[]>) => {
    state.status = "succeeded";
    state.items = action.payload;
    state.error = null;
};

const handleDeleteByIdFulfilled = (state: commentsState, action: PayloadAction<{ id: string }>) => {
    state.status = "succeeded";
    state.items = state.items.filter((project) => project.id !== action.payload.id);
    state.error = null;
};

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, handlePending)
            .addCase(fetchComments.fulfilled, handleFetchFulfilled)
            .addCase(fetchComments.rejected, handleRejected)

            .addCase(fetchCommentsById.pending, handlePending)
            .addCase(fetchCommentsById.fulfilled, handleFetchFulfilled)
            .addCase(fetchCommentsById.rejected, handleRejected)

            .addCase(deleteCommentById.pending, handlePending)
            .addCase(deleteCommentById.fulfilled, handleDeleteByIdFulfilled)
            .addCase(deleteCommentById.rejected, handleRejected)

            .addCase(addcomment.pending, handlePending)
            .addCase(addcomment.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = "succeeded";
                state.items.push(action.payload);
                state.error = null;
            })
            .addCase(addcomment.rejected, handleRejected);
    },
});

export const { resetStatus } = commentsSlice.actions;
export const selectAllComments = (state: RootState) => state.comments.items;
export const selectCommentsStatus = (state: RootState) => state.comments.status;
export const selectCommentsError = (state: RootState) => state.comments.error;
export const selectCommentById = (state: RootState, commentsId: string) =>
    state.comments.items.find((comment) => comment.id === commentsId);

export default commentsSlice.reducer;
