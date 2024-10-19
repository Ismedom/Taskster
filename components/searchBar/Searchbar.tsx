import React from "react";
import { Input } from "../ui/forms/input";
import SearchIcon from "../icons/SearchIcon";

const Searchbar = () => {
    return (
        <div className="max-w-max relative">
            <Input
                type="search"
                className="bg-[#5E5D5D] rounded-3xl py-2 px-4 pr-7 min-w-[250px] sm:min-w-[300px] md:min-w-[450px] lg:min-w-[500px] border-none"
                placeholder="Type something..."
            />
            <span className=" absolute select-none text-gray-300 hover:text-gray-400 cursor-pointer right-3 top-[50%] -translate-y-1/2">
                <SearchIcon />
            </span>
        </div>
    );
};

export default Searchbar;
