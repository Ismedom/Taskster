"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NotificationArray = [
    {
        id: "223",
        title: "New",
        href: "/protected/notifications",
    },
    {
        id: "293",
        title: "Achieve",
        href: "/protected/notifications/achieve",
    },
];

const NotificationBar = () => {
    const pathname = usePathname();
    return (
        <div className="flex">
            {NotificationArray.map(({ id, title, href }) => (
                <Link
                    className={`${pathname === href ? "border-b-2 border-b-gray-500" : ""} px-3 py-2 hover:bg-gray-600`}
                    key={id}
                    id={id}
                    href={href}>
                    {title}
                </Link>
            ))}
        </div>
    );
};

export default NotificationBar;
