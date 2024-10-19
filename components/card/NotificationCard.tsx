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
            className="grid gap-1 grid-cols-[120px_90px_120px_1fr] sm:grid-cols-[150px_150px_150px_1fr] md:sm:grid-cols-[200px_150px_150px_1fr] py-3 md:py-4 pr-4 md:pr-8 border-b border-b-gray-700 hover:bg-gray-700 cursor-pointer select-none">
            <h2 className="select-text text-gray-300 first-letter:uppercase">{title}</h2>
            <p className="text-gray-400">{actionStatus}</p>
            <p className="text-gray-400">{dueDate as string}</p>
            <div className="flex justify-end">
                <EllipesHor className="size-4 cursor-pointer" />
            </div>
        </div>
    );
};

export default NotificationCard;
