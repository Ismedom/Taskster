//
export interface TaskAssignment {
    id?: string;
    task_id: string;
    user_id: string;
    assigned_date: Date | string;
    role: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
}
