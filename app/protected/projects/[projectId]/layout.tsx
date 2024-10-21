import TaskBarCom from "@/components/common/TaskBar";
import ArrowLeft from "@/components/icons/ArrowLeft";

import Link from "next/link";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="flex gap-1 items-center mt-3">
                <Link
                    href="/protected/projects/"
                    className="py-1 flex text-gray-300 items-center hover:bg-red-800 hover:px-3 rounded-md h-[35px] px-2 text-[15px] transition-all duration-200">
                    <ArrowLeft className="size-6" />
                </Link>
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <h2 className="text-[16px] text-gray-300">Lorem, ipsum dolor.</h2>
            </div>
            <div className="flex border-b​ border-b border-b-gray-600 mb-2 mt-3">
                <TaskBarCom />
            </div>
            <div>{children}</div>
        </div>
    );
};

export default layout;
