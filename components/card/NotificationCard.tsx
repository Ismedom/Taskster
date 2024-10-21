import React from "react";
import EllipesHor from "../icons/Ellipes.Hor";

const NotificationCard = ({
    id,
    title,
    actionStatus,
    dueDate,
}: {
    id: string;
    title: string;
    actionStatus?: string;
    dueDate: string | Date;
}) => {
    return (
        <div
            id={id}
            className="grid gap-1 grid-cols-4 w-full
                py-3 md:py-4 pr-4 md:pr-8 
                border-b border-b-gray-700 
                hover:bg-gray-700 cursor-pointer select-none">
            <h2 className="select-text text-gray-300 first-letter:uppercase col-span-1 truncate">{title}</h2>
            <p className="text-gray-400 col-span-1 truncate">{actionStatus}</p>
            <p className="text-gray-400 col-span-1 truncate">{dueDate as string}</p>
            <div className="flex justify-end col-span-1">
                <EllipesHor className="w-4 h-4 cursor-pointer" />
            </div>
        </div>
    );
};

export default NotificationCard;
