import React from "react";
import AnalyzeCard from "./AnalyzeCard";
const AnalyzeCardData = [
    {
        id: "1",
        title: "Your Projects",
        dataType: "percentage",
        statusType: "success",
        value: 7,
    },
    {
        id: "2",
        title: "Your tasks",
        dataType: "percentage",

        statusType: "none",
        value: 23,
    },
    {
        id: "11",
        title: "Project 3",
        dataType: "percentage",

        statusType: "danger",
        value: 70,
    },
    {
        id: "21",
        title: "Project 4",
        dataType: "percentage",
        statusType: "warning",
        value: 83,
    },
];

const DashboardPercentage = () => {
    return (
        <div className="grid grid-cols-2 gap-3">
            {AnalyzeCardData.map(({ id, title, dataType, statusType, value }) => (
                <AnalyzeCard
                    key={id}
                    id={id}
                    title={title}
                    dataType={dataType as "number" | "percentage"}
                    value={value}
                    alignItem="center"
                    fontSize="medium"
                    statusType={statusType as "success" | "danger" | "warning" | "none"}
                />
            ))}
        </div>
    );
};

export default DashboardPercentage;
