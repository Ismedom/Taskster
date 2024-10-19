import React from "react";
import LineProjectCard from "./LineProjectCard";

const HorizontalProjectCardArray = [
    {
        id: "23",
        title: "game development",
        tags: ["game", "cpp"],
        colorId: " #15803d ",
        description: "lorem 10 words",
    },
    {
        id: "233",
        title: "development",
        tags: ["js", "cpp"],
        colorId: " #65803d ",
        description: "t tesing project ",
    },
    {
        id: "233",
        title: "development",
        tags: ["js", "cpp"],
        colorId: "#60a5fa ",
        description: "the first tesing project ",
    },
];

const LineProjectListCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {HorizontalProjectCardArray.map((card) => (
                <LineProjectCard key={card.id} {...card} />
            ))}
        </div>
    );
};

export default LineProjectListCard;
