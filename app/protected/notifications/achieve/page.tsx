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
        title: "Testing js",
        actionStatus: "overdue",
        dueDate: "2014-02-01",
    },
    {
        id: "162",
        title: "game development",
        actionStatus: "overdue",
        dueDate: "2014-02-01",
    },
    {
        id: "22",
        title: "testing game",
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
