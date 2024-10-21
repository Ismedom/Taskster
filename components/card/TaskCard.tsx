import React, { useEffect } from "react";
import GroupUserCard from "../user/GroupUserCard";
import DateIcon from "../icons/DataIcon";
import { Task } from "../../interfaces/tasks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { selectTasksDetailId, settaskDetailId } from "@/store/feature/tasks";
import { fetchTaskAssignmentById, fetchTaskAssignments } from "@/store/actions/tasksAssignment";
import { createClient } from "@/supabase/client";

type TaskProps = Task;

const TaskCard: React.FC<TaskProps> = ({ id, task_name, status, priority, description, due_date, tags }) => {
    const dispatch = useDispatch<AppDispatch>();
    const taskDeltailId = useSelector(selectTasksDetailId);
    // const taskDeltailId = useSelector(selectTasksDetailId);

    const formatDate = (date: string | Date): string => {
        if (typeof date === "string") return new Date(date).toLocaleDateString();
        if (date instanceof Date) return date.toLocaleDateString();
        return "No due date";
    };

    const handleFetchingDetailsTask = async () => {
        const supabase = createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();

        dispatch(settaskDetailId(id as string));

        const objQuery = { owner_id: user?.id as string, task_id: id as string };
        // console.log(objQuery);
        dispatch(fetchTaskAssignmentById(objQuery));
    };

    return (
        <div
            onClick={() => handleFetchingDetailsTask()}
            className="p-4 bg-[#3A3A3A] text-gray-300 hover:bg-gray-700 cursor-pointer">
            <h2 className="text-lg pb-2 mb-2 border-b border-b-gray-600">{task_name}</h2>
            <div className="flex gap-1 items-center">
                <GroupUserCard />2 collaborators
            </div>
            <div className="py-3 flex flex-col gap-1">
                <div className="flex gap-2 items-center">
                    <DateIcon className="size-4" />
                    {formatDate(due_date)}
                </div>
                <div className="flex gap-2 items-center text-yellow-600">
                    <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                    {status || "Tracking"}
                </div>
                <div className="flex gap-2 items-center text-blue-400 font-[400]">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {priority}
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
