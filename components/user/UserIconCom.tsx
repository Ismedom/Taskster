import React from "react";
import UserIcon from "../icons/UserIcon";

const UserIconCom = () => {
    return (
        <div className="bg-gray-300 rounded-full p-1 cursor-pointer select-none">
            <span className="text-gray-600">
                <UserIcon />
            </span>
        </div>
    );
};

export default UserIconCom;
