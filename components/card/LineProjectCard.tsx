import React from "react";

const LineProjectCard = ({
    id,
    title,
    tags,
    colorId,
    description,
}: {
    id: string;
    title: string;
    tags?: string[];
    colorId: string;
    description?: string;
}) => {
    return (
        <article id={id} className="bg-gray-700 px-4 py-6 rounded-sm hover:bg-gray-600 cursor-pointer select-none">
            <div className="flex gap-2 items-center pb-3">
                <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: colorId.includes("#") ? colorId.trim() : `#${colorId.trim()}` }}></div>
                <h2 className="text-gray-300 text-[16px]">{title}</h2>
            </div>
            <p className="text-gray-400 pb-2 ">{description}</p>
            <p className="text-gray-400 flex flex-wrap gap-2">
                {(tags as string[]).map((tag) => (
                    <span className="py-[1px] px-2 rounded-md bg-gray-600">{tag}</span>
                ))}
            </p>
        </article>
    );
};

export default LineProjectCard;
