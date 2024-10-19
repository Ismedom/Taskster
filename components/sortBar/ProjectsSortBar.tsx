import React from "react";
import BarBottomRight from "../icons/BarBottomRight";
import { Button } from "../ui/buttons/button";
import ArrowUpDown from "../icons/ArrowUpDown";

const ProjectsSortBar = () => {
    return (
        <div className="flex items-center">
            <Button className="flex gap-2 items-center font-[300] bg-transparent py-1">
                Sort
                <ArrowUpDown className="size-4" />
            </Button>
            <Button className="flex gap-2 items-center font-[300] bg-transparent py-1">
                Priority
                <BarBottomRight className="size-4" />
            </Button>
        </div>
    );
};

export default ProjectsSortBar;
