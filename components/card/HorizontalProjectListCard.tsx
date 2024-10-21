import React, { useEffect } from "react";
import HorizontalProjectCard from "./HorizontalProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProjects, selectProjectsStatus } from "@/store/feature/projects";
import { AppDispatch } from "@/store/store";
import { fetchProjects } from "@/store/actions/projects";

const HorizontalProjectListCard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const allProjects = useSelector(selectAllProjects);
    const status = useSelector(selectProjectsStatus);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProjects());
        }
    }, [status, dispatch]);

    if (status === "loading") {
        return (
            <div className="flex items-center justify-center py-8">
                <div className="animate-spin w-6 h-6 border-2 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
        );
    }

    if (status === "failed") {
        return <div className="text-red-500 py-4 text-center">Failed to load projects. Please try again later.</div>;
    }

    return (
        <div className="flex flex-col w-full">
            {allProjects.map((project) => (
                <HorizontalProjectCard
                    key={project.id}
                    id={project.id as string}
                    project_name={project.project_name}
                    description={project.description}
                    tags={project.tags}
                />
            ))}
        </div>
    );
};

export default HorizontalProjectListCard;
