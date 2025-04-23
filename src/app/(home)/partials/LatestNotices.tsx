import Image from "next/image";
import React from "react";
import { services } from "@/data/services";
import NoticeTab from "./NoticeTab";
import TabContent from "./TabContent";

const LatestNotices = () => {
  const tabData = [
    {
      label: "General",
      content: <TabContent />,
    },
    {
      label: "Tariff ",
      content: <p>This is the detailed information.</p>,
    },
    {
      label: "Regulations",
      content: <p>Here you can contact support.</p>,
    },
    {
      label: "Consumers",
      content: <p>Here you can contact support.</p>,
    },
    {
      label: "Licensees ",
      content: <p>Here you can contact support.</p>,
    },
  ];

  return (
    <div className="bg-background-400 mb-[2.5rem]">
      <div className="flex flex-col lg:flex-row gap-[2.5rem] padding-x pb-10">
        {/* left  */}
        <div className="w-full">
          <h3 className="text-text-500 typography-h3 font-bold leading-[150%] pb-[1.25rem]">
            Services
          </h3>
          <div className="grid grid-cols-3 gap-4 lg:gap-[1.5rem]">
            {services?.map((service, index) => (
              <div
                key={index}
                className="flex gap-[0.75rem] items-center group relative"
              >
                {/* Base Card */}
                <div className="bg-blue-400 rounded-[0.5rem] p-4 lg:p-0 lg:pr-[2.56rem] lg:pl-[2.62rem] lg:pt-[2.06rem] lg:pb-[2.12rem] text-center relative overflow-hidden cursor-pointer">
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  {/* Content */}
                  <div className="relative z-20">
                    <div className="lg:w-[5rem] lg:h-[5rem] mx-auto">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="typography-p-large font-semibold text-white pt-[0.75rem]">
                      {service.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* right  */}
        <div className="w-full">
          <h3 className="text-text-500 typography-h3 font-bold leading-[150%] pb-[1.25rem]">
            Latest Notices
          </h3>
          <NoticeTab tabs={tabData} />
        </div>
      </div>
    </div>
  );
};

export default LatestNotices;
