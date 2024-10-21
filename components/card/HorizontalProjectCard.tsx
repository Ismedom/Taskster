import React from "react";
// import EllipesHor from "../icons/Ellipes.Hor";
import Link from "next/link";
import ChevronRight from "../icons/ChevronRight";

interface HorizontalProjectCardProps {
    id: string;
    project_name: string;
    description?: string;
    tags?: string[];
    colorId?: string;
}

const HorizontalProjectCard = ({ id, project_name, description, tags, colorId }: HorizontalProjectCardProps) => {
    const backgroundColor = colorId?.includes("#") ? colorId.trim() : `#${colorId?.trim()}`;

    return (
        <Link
            href={`/protected/projects/${id}`}
            className="grid grid-cols-[120px_120px_150px_1fr] sm:grid-cols-[140px_120px_150px_1fr] md:grid-cols-[170px_120px_180px_1fr] lg:grid-cols-[200px_140px_200px_1fr] pt-5 md:pt-6 md:pb-3 pb-2 border-b border-b-gray-700 cursor-pointer hover:bg-gray-700 hover:pl-1 transition-all duration-150 select-none">
            <div className="flex gap-3 items-center truncate">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor }}></span>
                <h2 className="text-gray-300 truncate select-text first-letter:uppercase ">{project_name}</h2>
            </div>
            <div className="text-gray-400 overflow-hidden truncate">
                {tags && tags.length > 0 ? (
                    <p className="truncate">
                        {tags.map((tag, index) => (
                            <React.Fragment key={tag}>
                                <span className="select-text">{tag}</span>
                                {index < tags.length - 1 && ", "}
                            </React.Fragment>
                        ))}
                    </p>
                ) : (
                    <p>No tags</p>
                )}
            </div>
            <div className="truncate text-gray-400">{description}</div>
            <div className="flex justify-end md:pr-2">
                <ChevronRight className="size-4 text-gray-400" />
            </div>
        </Link>
    );
};

export default HorizontalProjectCard;
