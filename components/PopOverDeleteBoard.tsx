"use client";

import React, { SetStateAction, useEffect } from "react";
import { Button } from "./ui/buttons/button";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteProjectsById, fetchProjectsById } from "@/store/actions/projects";

import { selectProjectsStatus } from "@/store/feature/projects";
import { useRouter } from "next/navigation";
import { createClient } from "@/supabase/client";

type PopOverDeleteBoardPros = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
};

const PopOverDeleteBoard = ({ isOpen, setIsOpen }: PopOverDeleteBoardPros) => {
    const dispatch = useDispatch<AppDispatch>();
    const pathname = usePathname();
    const status = useSelector(selectProjectsStatus);
    const projectId = pathname.split("/").slice(3, 4)[0];
    const router = useRouter();

    //
    const handleDeleteProject = async () => {
        try {
            const supabase = createClient();
            const {
                data: { user },
            } = await supabase.auth.getUser();
            if (!user) throw new Error("No user found");
            const obj = { id: projectId, userId: user.id };

            await dispatch(deleteProjectsById(obj));
            router.push("/protected/projects");
        } catch (err) {
            console.log(err);
        }
    };

    if (status === "loading") return <div>Loaoding...</div>;
    if (status === "failed") return <div>Error...</div>;

    return (
        <div className="px-5 py-5 bg-slate-700 w-max rounded-md absolute top-0">
            <div>Do you want to delete it?</div>
            <div className="flex gap-4 mt-5">
                <Button onClick={() => setIsOpen(false)} className="bg-red-600 hover:bg-red-700">
                    Cancel
                </Button>
                <Button onClick={() => handleDeleteProject()} className="bg-lightBlue hover:bg-sky-500">
                    Yes !
                </Button>
            </div>
        </div>
    );
};

export default PopOverDeleteBoard;
