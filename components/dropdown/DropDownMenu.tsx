"use client";

import * as React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/buttons/button";
import { SortAscIcon } from "lucide-react";

export function DropdownMenuRadioGroupDemo() {
    const [position, setPosition] = React.useState("bottom");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="border-gray-600 text-gray-300 bg-transparent outline-none focus:outline-none">
                    <SortAscIcon className="size-4" /> sort
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-20">
                {/* <DropdownMenuLabel>Panel Position</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
