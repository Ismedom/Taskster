import Link from "next/link";
import React from "react";

const RecentProjectCard = ({ id, title, colorId }: { id: string; title: string; colorId: string }) => {
    return (
        <Link href="" className="flex gap-2 items-center" id={id}>
            <div
                className="w-4 h-4 rounded-ful bg-green-500 rounded-full"
                style={{ backgroundColor: colorId.includes("#") ? colorId : `#${colorId}` }}></div>
            <h3 className="text-gray-400 text-[14px] truncate w-[110px]">{title}</h3>
        </Link>
    );
};

export default RecentProjectCard;
