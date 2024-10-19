import HorizontalProjectListCard from "@/components/card/HorizontalProjectListCard";
import LineProjectListCard from "@/components/card/LineProjectListCard";
import ProjectsSortBar from "@/components/sortBar/ProjectsSortBar";
import React from "react";

const page = async () => {
    return (
        <div>
            <div className="border-b text-[16px] border-b-gray-600 text-gray-300">
                <h2 className="pt-4">Your Projects</h2>
                <div className="pt-3">
                    <ProjectsSortBar />
                </div>
            </div>
            <div className="pt-3">
                <HorizontalProjectListCard />
                {/* <LineProjectListCard /> */}
            </div>
        </div>
    );
};

export default page;
