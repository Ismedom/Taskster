"use client";

import { addTaskAssignment, fetchTaskAssignments } from "@/store/actions/tasksAssignment";
import { selectAllTasks, selectTasksDetailId } from "@/store/feature/tasks";
import { AppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/buttons/button";
import { selectAlltasksAssignment } from "@/store/feature/taskAssignment";

const DetailTask = () => {
    const dispatch = useDispatch<AppDispatch>();
    const allTasks = useSelector(selectAllTasks);
    const taskDetailId = useSelector(selectTasksDetailId);
    const taskAssignments = useSelector(selectAlltasksAssignment);

    const task = allTasks.find((task) => task.id === taskDetailId);

    const handleAddTaskAssignment = async () => {
        const assigningModel = {
            task_id: taskDetailId,
            user_id: "0f7ca8c4-ba9e-4c41-9237-5dbc05922bb6",
            assign_from: "0f7ca8c4-ba9e-4c41-9237-5dbc05922bb6",
            assigned_date: "2024-10-17",
            role: "senor",
        };
        await dispatch(addTaskAssignment(assigningModel));
    };

    if (!task) {
        return <div>No task details available.</div>;
    }

    return (
        <div>
            <h1>{task.task_name}</h1>
            <p>
                <strong>Status:</strong> {task.status}
            </p>
            <p>
                <strong>Priority:</strong> {task.priority}
            </p>
            <p>
                <strong>Description:</strong> {task.description}
            </p>
            <p>
                <strong>Due Date:</strong> {new Date(task.due_date).toLocaleDateString()}
            </p>
            <p>
                <strong>Tags:</strong> {task.tags.join(", ")}
            </p>
            <p>
                <strong>Recurring:</strong> {task.recurring ? "Yes" : "No"}
            </p>
            {task.recurrence_pattern && (
                <p>
                    <strong>Recurrence Pattern:</strong> {task.recurrence_pattern}
                </p>
            )}
            <p>
                <strong>Created At:</strong> {new Date(task.created_at as string).toLocaleString()}
            </p>
            <p>
                <strong>Updated At:</strong> {new Date(task.updated_at as string).toLocaleString()}
            </p>

            {taskAssignments.map((assignment) => (
                <div key={assignment.id}>{JSON.stringify(assignment)}</div>
            ))}

            <div>
                <Button onClick={handleAddTaskAssignment}>add task Assignment</Button>
            </div>
        </div>
    );
};

export default DetailTask;
