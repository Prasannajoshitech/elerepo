"use client";
import React, { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
}

const NoticeTab: React.FC<TabsProps> = ({ tabs, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex flex-wrap lg:gap-4 bg-blue-400 rounded-t-[0.7rem] lg:pt-[0.31rem] pb-[0.25rem] lg:pl-[0.25rem]">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-[0.75rem] lg:p-0 lg:px-[1.5rem] lg:py-[1rem] typography-p-regular hover:border-b-2 font-semibold text-center transition-all duration-200 text-white ${
              index === activeIndex
                ? "border-b-2  border-white text-white "
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
};

export default NoticeTab;
