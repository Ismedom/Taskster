export interface Task {
    id?: string;
    task_name: string;
    status: "tracking" | "done" | "due_date";
    priority: "high" | "medium" | "low" | "none";
    description: string;
    due_date: Date | string;
    estimated_time: number | null;
    actual_time?: number | null;
    tags: string[];
    recurring?: boolean;
    recurrence_pattern?: string | null;
    project_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
}
