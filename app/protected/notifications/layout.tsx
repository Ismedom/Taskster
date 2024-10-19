import NotificationBar from "@/components/common/NotificationBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className="border-b border-b-gray-600 my-4">
                <NotificationBar />
            </div>
            <div>{children}</div>
        </div>
    );
};

export default layout;
