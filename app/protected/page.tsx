"use client";

import { fetchTaskAssignments } from "@/redux/actions/tasksAssignment";
import { selectAllComments } from "@/redux/feature/comment";
import { selectProjectsError, selectProjectsStatus } from "@/redux/feature/projects";
import { selectAlltasksAssignment } from "@/redux/feature/taskAssignment";
import { AppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const taskAssignment = useSelector(selectAlltasksAssignment);
    const status = useSelector(selectProjectsStatus);
    const error = useSelector(selectProjectsError);

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

    useEffect(() => {
        dispatch(fetchTaskAssignments());
    }, []);

    return <div>{JSON.stringify(taskAssignment)}</div>;
};

export default page;
