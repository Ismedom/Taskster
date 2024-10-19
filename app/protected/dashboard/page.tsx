import Dashboard from "@/components/card/Dashboard";
import DashboardPercentage from "@/components/card/DashboardPercentage";
import { Charts } from "@/components/charts/Chart";
import React from "react";

const page = () => {
    return (
        <div>
            <h2 className="pt-4 pb-3 border-b border-b-gray-600 mb-4">Dashboard</h2>
            <div className="mb-3">
                <Dashboard />
            </div>
            <div className="grid grid-cols-2">
                <div className="p-4 md:p-5 bg-[#3A3A3A] rounded-md">
                    <DashboardPercentage />
                </div>
                <div>
                    <Charts />
                </div>
            </div>
        </div>
    );
};

export default page;
