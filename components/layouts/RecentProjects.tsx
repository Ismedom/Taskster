import React from "react";
import RecentProjectCard from "../common/RecentProjectCard";

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
    return (
        <div className="pt-2">
            <h2 className="text-[15px] text-gray-400 py-4">Recent Projects</h2>
            <div className="flex flex-col gap-2">
                {recentProject.map(({ id, title, colorId }) => (
                    <RecentProjectCard key={id} id={id.toString()} title={title} colorId={colorId} />
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
