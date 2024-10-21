import React from "react";
import BarIcon from "../icons/BarIcon";
import Searchbar from "../searchBar/Searchbar";
import SettingIcon from "../icons/SettingIcon";
import UserIconCom from "../user/UserIconCom";
// import { useDispatch } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";

const Header = () => {
    // const dispatch = useDispatch<Dispatch>();

    return (
        <nav className="flex gap-3 items-center justify-between w-full px-8 text-gray-300">
            <div className="flex items-center gap-4">
                <BarIcon className="size-8 cursor-pointer" />
                <h1 className="select-none">Melo</h1>
            </div>
            <div>
                <Searchbar />
            </div>
            <div className="flex gap-4 md:gap-8 mr-4 items-center">
                {/* <div>
                    <Button
                        onClick={() => dispatch(isToggleProjectBoard())}
                        className="flex items-center gap-1 h-[35px] bg-lightBlue hover:bg-blue-500">
                        <span>
                            <PlusIcon className="size-4" />
                        </span>
                        create
                    </Button>
                </div> */}
                <div className="flex gap-3 items-center">
                    <SettingIcon className="size-7" />
                    <UserIconCom />
                </div>
            </div>
        </nav>
    );
};

export default Header;
