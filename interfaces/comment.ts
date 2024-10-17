export interface Comment {
    id: string;
    task_id: string;
    user_id: string;
    text: string;
    created_at: Date | string;
    updated_at: Date | string;
}
