export interface Task {
    id?: string;
    task_name: string;
    status: string;
    priority: string;
    description: string;
    due_date: Date | string;
    estimated_time: number | null;
    actual_time: number | null;
    tags: string[];
    recurring: boolean;
    recurrence_pattern: string | null;
    project_id: string;
    parent_task_id?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
}
