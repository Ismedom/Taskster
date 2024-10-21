import { addTask } from "@/store/actions/tasks";
import { AppDispatch } from "@/store/store";
// import { createClient } from "@/utils/supabase/client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CreateTask = ({ projectId }: { projectId: string }) => {
    // const supabase = createClient();
    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState<"tracking" | "done" | "due_date">("tracking");
    const [priority, setPriority] = useState<"high" | "medium" | "low" | "none">("none");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [tags, setTags] = useState("");
    const [recurring, setRecurring] = useState(false);
    const [recurrencePattern, setRecurrencePattern] = useState("");
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            task_name: taskName,
            status,
            priority,
            description,
            due_date: dueDate,
            estimated_time: parseFloat(estimatedTime),
            tags: tags.split(",").map((tag) => tag.trim()),
            recurring,
            recurrence_pattern: recurring ? recurrencePattern : null,
            project_id: projectId,
        };

        try {
            await dispatch(addTask(newTask));
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
                required
                className="w-full p-2 border rounded text-gray-700"
            />
            {/* <input
                type="text"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                placeholder="Priority"
                className="w-full p-2 border rounded text-gray-700"
            /> */}
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="w-full p-2 border rounded text-gray-700"
            />
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full p-2 border rounded text-gray-700"
            />
            <input
                type="number"
                value={estimatedTime}
                onChange={(e) => setEstimatedTime(e.target.value)}
                placeholder="Estimated Time"
                className="w-full p-2 border rounded text-gray-700"
            />
            <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Tags (comma-separated)"
                className="w-full p-2 border rounded text-gray-700"
            />
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={recurring}
                    onChange={(e) => setRecurring(e.target.checked)}
                    className="mr-2"
                />
                <label>Recurring</label>
            </div>
            {recurring && (
                <input
                    type="text"
                    value={recurrencePattern}
                    onChange={(e) => setRecurrencePattern(e.target.value)}
                    placeholder="Recurrence Pattern"
                    className="w-full p-2 border rounded text-gray-700"
                />
            )}

            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
                Create Task
            </button>
        </form>
    );
};

export default CreateTask;
