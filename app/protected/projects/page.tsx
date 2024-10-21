"use client";

import HorizontalProjectListCard from "@/components/card/HorizontalProjectListCard";
import ProjectsSortBar from "@/components/sortBar/ProjectsSortBar";
import { Button } from "@/components/ui/buttons/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { closeProjectBoard, openProjectBoard, selectIsOpenProjectBoard } from "@/store/feature/projectManagement";
import CreateProjectPage from "@/components/ProjectBoard";

const page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isOpenProjectBoard = useSelector(selectIsOpenProjectBoard);
    return (
        <div>
            <div className="border-b text-[16px] border-b-gray-600 text-gray-300">
                <h2 className="pt-4">Your Projects</h2>
                <div className="pt-3 flex">
                    <ProjectsSortBar />
                    <Button
                        onClick={() => dispatch(openProjectBoard())}
                        className="bg-transparent text-[300] bg-gray-600 hover:bg-gray-700 h-[35px]">
                        New Prorject
                    </Button>
                </div>
            </div>
            <div className="pt-3">
                <HorizontalProjectListCard />
                {/* <LineProjectListCard /> */}
            </div>
            {isOpenProjectBoard ? (
                <div className="absolute grid place-items-center inset-0 z-[200] bg-black/75">
                    <div onClick={() => dispatch(closeProjectBoard())} className="absolute inset-0 z-[1]"></div>
                    <div className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] px-4 py-5 mx-auto bg-gray-800 rounded-sm z-[2]">
                        <CreateProjectPage />
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default page;
