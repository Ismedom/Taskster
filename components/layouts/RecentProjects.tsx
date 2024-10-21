"use client";

import React, { useEffect } from "react";
import RecentProjectCard from "../common/RecentProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { selectAllProjects, selectProjectsStatus } from "@/store/feature/projects";
import { fetchProjects } from "@/store/actions/projects";

const recentProject = [
    {
        id: "s23h",
        title: "testing game",
        colorId: "#ffff",
    },
    {
        id: "h43",
        title: "web development",
        colorId: "#60a5fa",
    },
    {
        id: "12",
        title: "game development",
        colorId: "#16a34a ",
    },
];

const RecentProjects = () => {
    const dispatch = useDispatch<AppDispatch>();
    const allProjects = useSelector(selectAllProjects);
    const status = useSelector(selectProjectsStatus);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProjects());
        }
    }, [status, dispatch]);
    return (
        <div className="pt-2">
            <h2 className="text-[15px] text-gray-400 py-4">Recent Projects</h2>
            <div className="flex flex-col gap-2">
                {allProjects.map(({ id, project_name }) => (
                    <RecentProjectCard key={id} id={(id as string).toString()} title={project_name} />
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
