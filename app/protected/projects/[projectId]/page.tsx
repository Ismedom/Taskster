"use client";

import TaskCard from "@/components/card/TaskCard";
import CreateTask from "@/components/CreateTask";
import DetailTask from "@/components/DetailTask";
import { DropdownMenuRadioGroupDemo } from "@/components/dropdown/DropDownMenu";
import { Button } from "@/components/ui/buttons/button";
import { fetchTasksById } from "@/store/actions/tasks";
import { selectAllTasks, selectTaskById, selectTasksDetailId, settaskDetailId } from "@/store/feature/tasks";
import { AppDispatch } from "@/store/store";
import { XIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [isOpenCrateTask, setIsOpenCrateTask] = useState(false);
    const { projectId } = useParams();
    const allTasks = useSelector(selectAllTasks);
    const dispatch = useDispatch<AppDispatch>();
    const taskDeltailId = useSelector(selectTasksDetailId);

    useEffect(() => {
        const queryObj = { project_id: projectId as string };
        dispatch(fetchTasksById(queryObj));
    }, []);

    return (
        <div>
            <div className="flex gap-2">
                <div className="flex">
                    <DropdownMenuRadioGroupDemo />
                    <DropdownMenuRadioGroupDemo />
                </div>
                <div className="flex gap-2">
                    <Button
                        onClick={() => setIsOpenCrateTask(!isOpenCrateTask)}
                        className="py-1 h-[35px] px-2 text-[13px] bg-gray-600 hover:bg-gray-700">
                        Add Task
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-3">
                {allTasks.map((task) => (
                    <TaskCard {...task} key={task.id} />
                ))}
            </div>
            <div
                className={`absolute overflow-hidden top-0 bottom-0 bg-slate-500 right-0 z-[100] transition-all duration-300 ease-in-out ${
                    taskDeltailId ? "max-w-[450px]" : "max-w-0"
                }`}>
                <div
                    onClick={() => dispatch(settaskDetailId(""))}
                    className={`bg-black opacity-60 z-[1] ${taskDeltailId ? "block inset-0 fixed" : "hidden"}`}></div>

                <div className="px-4 py-5 w-[450px] h-full relative z-[2]">
                    <XIcon
                        onClick={() => dispatch(settaskDetailId(""))}
                        className="cursor-pointer select-none text-xl"
                    />
                    <DetailTask />
                </div>
            </div>
            {isOpenCrateTask ? (
                <div>
                    <CreateTask projectId={projectId as string} />
                </div>
            ) : null}
        </div>
    );
};

export default page;
