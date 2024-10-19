import React from "react";
import EllipesHor from "../icons/Ellipes.Hor";

const HorizontalProjectCard = ({
    id,
    title,
    tags,
    colorId,
}: {
    id: string;
    title: string;
    tags: string[];
    colorId: string;
}) => {
    return (
        <article
            id={id}
            className="grid grid-cols-[150px_150px_1fr] sm:grid-cols-[200px_200px_1fr] md:grid-cols-[250px_300px_1fr] pt-5 md:pt-6 md:pb-3 pb-2 border-b border-b-gray-700 cursor-pointer hover:bg-gray-700 hover:pl-1 transition-all duration-150 select-none">
            <div className="flex gap-3 items-center">
                <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: colorId.includes("#") ? colorId.trim() : `#${colorId.trim()}` }}></span>
                <h2 className="text-gray-300 select-text">{title}</h2>
            </div>
            <p className="text-gray-400">
                {tags.map((tag) => (
                    <span key={tag} className="mr-1 text-gray-400 select-text">
                        {tag}
                        {","}
                    </span>
                ))}
            </p>
            <div className="flex justify-end pr-4">
                <span>
                    <EllipesHor className="size-6" />
                </span>
            </div>
        </article>
    );
};

export default HorizontalProjectCard;
