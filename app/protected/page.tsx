"use client";

import AnalyzeListCard from "@/components/card/AnalyzeListCard";
import { Button } from "@/components/ui/buttons/button";
import { fetchTaskAssignments } from "@/redux/actions/tasksAssignment";
// import { selectAllComments } from "@/redux/feature/comment";
import { selectProjectsError, selectProjectsStatus } from "@/redux/feature/projects";
import { selectAlltasksAssignment } from "@/redux/feature/taskAssignment";
import { AppDispatch } from "@/redux/store";
import React, { useEffect } from "react";

const page = () => {
    // const dispatch = useDispatch<AppDispatch>();
    // const taskAssignment = useSelector(selectAlltasksAssignment);
    // const status = useSelector(selectProjectsStatus);
    // const error = useSelector(selectProjectsError);

    // async function fetchProject() {
    //     const supabase = createClient();
    //     const {
    //         data: { user },
    //         error,
    //     } = await supabase.auth.getUser();

    //     if (error || !user) {
    //         console.error("Error fetching user:", error);
    //         return;
    //     }
    // }

    // useEffect(() => {
    //     dispatch(fetchTaskAssignments());
    // }, []);

    return (
        <div>
            <h2 className="py-3">Home</h2>
            <div className="py-4">
                <h3 className="py-2 pt-6">Analyze</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnalyzeListCard />
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col gap-4 pb-4 justify-center items-center">
                            <h2 className="text-5xl">Good Evening!</h2>
                            <h3 className="text-4xl">Devon</h3>
                        </div>
                        <div className="py-4 text-lg text">Manage your task with ease</div>
                        <div className="flex gap-3">
                            <Button className="font-[400] bg-green-700 hover:bg-green-600">My projects</Button>
                            <Button className="font-[400] bg-lightBlue hover:bg-gray-700">New one</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
