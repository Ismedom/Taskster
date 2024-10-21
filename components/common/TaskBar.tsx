"use client";

import React from "react";
import ListIcon from "../icons/ListIcon";
import UserIcon from "../icons/UserIcon";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import BookMarkIcon from "../icons/BookMarkIcon";
import SettingIcon from "../icons/SettingIcon";

const TaskBarCom = () => {
    const pathname = usePathname();
    const projectId = useParams().projectId;
    return (
        <div className="flex">
            <Link
                href={`/protected/projects/${projectId}`}
                className="flex items-center py-2 px-2 hover:bg-gray-700 gap-1 text-gray-300 bg-transparent">
                <ListIcon className="size-4" />
                Tasks
            </Link>
            <Link
                href={`/protected/projects/${projectId}/members`}
                className="flex items-center py-2 px-2 hover:bg-gray-700 gap-1 text-gray-300 bg-transparent">
                <UserIcon className="size-4" />
                Members
            </Link>
            <Link
                href={`/protected/projects/${projectId}/dashboard`}
                className="flex items-center py-2 px-2 hover:bg-gray-700 gap-1 text-gray-300 bg-transparent">
                <BookMarkIcon className="size-4" />
                Dashboard
            </Link>
            <Link
                href={`/protected/projects/${projectId}/settings`}
                className="flex items-center py-2 px-2 hover:bg-gray-700 gap-1 text-gray-300 bg-transparent">
                <SettingIcon className="size-4" />
                Setting
            </Link>
        </div>
    );
};

export default TaskBarCom;
