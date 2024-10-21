"use client";
import PopOverDeleteBoard from "@/components/PopOverDeleteBoard";
import { Button } from "@/components/ui/buttons/button";
import React, { useState } from "react";

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpen(!isOpen)}>Delete this Project</Button>
            <div className={`${isOpen ? "block" : "hidden"} relative`}>
                <PopOverDeleteBoard {...{ isOpen, setIsOpen }} />
            </div>
        </div>
    );
};

export default page;
