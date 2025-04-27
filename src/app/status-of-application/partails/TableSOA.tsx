"use client";
import { useState } from "react";
import UnderPreliminaryReview from "./Table";

const tabList = [
  //?ToDo    this is not tab this is actually filter

  { label: "All", component: <UnderPreliminaryReview /> },
  {
    label: "Under Preliminary Review",
    component: "Here goes data table for Under Preliminary Review ",
  },
  {
    label: "Reviewed and Comment Said",
    component: "Here goes data table for Reviewed and Comment Said",
  },
  { label: "Approved", component: "Here goes data table for Approved" },
];

const TableSOA = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      {/* Tabs Header */}
      <div className="flex justify-between items-center flex-wrap gap-2 mt-[2.88rem] mb-[1.25rem]">
        <div className="flex flex-wrap lg:overflow-x-auto lg:space-x-2 p-[0.38rem] bg-white rounded-[0.5rem] shadow-sm">
          {tabList.map((tab, index) => (
            <div
              key={index}
              className={`py-[0.62rem] px-[1.5rem] cursor-pointer transition-all duration-300 rounded-[0.5rem] typography-p1-regular font-medium  ${
                activeTab === index
                  ? "bg-blue-50 text-blue-500"
                  : "text-text-500"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>{tabList[activeTab]?.component}</div>
    </div>
  );
};

export default TableSOA;
