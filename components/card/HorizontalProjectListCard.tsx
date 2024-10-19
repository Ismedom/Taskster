import React from "react";
import HorizontalProjectCard from "./HorizontalProjectCard";
const HorizontalProjectCardArray = [
    {
        id: "23",
        title: "game development",
        tags: ["game", "cpp"],
        colorId: " #15803d ",
    },
    {
        id: "233",
        title: "development",
        tags: ["js", "cpp"],
        colorId: " #65803d ",
    },
    {
        id: "233",
        title: "development",
        tags: ["js", "cpp"],
        colorId: "#60a5fa ",
    },
];

const HorizontalProjectListCard = () => {
    return (
        <div>
            {HorizontalProjectCardArray.map((project) => (
                <HorizontalProjectCard key={project.id} {...project} />
            ))}
        </div>
    );
};

export default HorizontalProjectListCard;
