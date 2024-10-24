import NotificationCard from "@/components/card/NotificationCard";
import React from "react";
const NotificationArray = [
    {
        id: "12",
        title: "web development",
        actionStatus: "overdue",
        dueDate: "2014-02-01",
    },
    {
        id: "120",
        title: "string",
        actionStatus: "overdue",
        dueDate: "2014-02-01",
    },
    {
        id: "162",
        title: "game development",
        actionStatus: "overdue",
        dueDate: "2014-02-01",
    },
];

const page = () => {
    return (
        <div>
            {NotificationArray.map((notification) => (
                <NotificationCard key={notification.id} {...notification} />
            ))}
        </div>
    );
};

export default page;
