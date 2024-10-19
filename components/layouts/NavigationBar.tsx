"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeIcon from "../icons/HomeIcon";
import ProjectIcon from "../icons/ProjectIcon";
import BookMarkIcon from "../icons/BookMarkIcon";
import InboxIcon from "../icons/InboxIcon";
import RecentProjects from "./RecentProjects";

const NavigationBar = () => {
    const pathname = usePathname();

    const navBarArray = [
        {
            id: 1,
            href: "/protected",
            text: "Home",
            icon: <HomeIcon />,
        },
        {
            id: 2,
            href: "/protected/projects",
            text: "Projects",
            icon: <ProjectIcon />,
        },
        {
            id: 3,
            href: "/protected/dashboard",
            text: "Dashboard",
            icon: <BookMarkIcon />,
        },
        {
            id: 4,
            href: "/protected/notifications",
            text: "Notifications",
            icon: <InboxIcon />,
        },
    ];

    const isActive = (href: string) => {
        if (href === "/protected") {
            return pathname === "/protected" || pathname === "/protected/";
        }
        return pathname.startsWith(href);
    };

    return (
        <div>
            <nav className="flex flex-col py-8 border-b border-b-gray-500">
                {navBarArray.map((item) => {
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.id}
                            className={`px-5 pl-7 py-3 flex gap-3 text-[15px] items-center text-gray-300 ${
                                active ? "bg-lightBlue" : "hover:bg-gray-700"
                            }`}
                            href={item.href}>
                            <span className={active ? "text-gray-300" : "text-gray-400"}>{item.icon}</span>
                            {item.text}
                        </Link>
                    );
                })}
            </nav>
            <div className="px-5">
                <RecentProjects />
            </div>
        </div>
    );
};

export default NavigationBar;
