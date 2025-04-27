import { heroSectionData } from "@/data/heroSection";
import React from "react";

const HeroSOA = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroSectionData?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[8rem] lg:h-[12rem] w-full relative rounded-[0.25rem] overflow-hidden flex justify-center items-center"
      >
        <div className="bg-[#003386BD]/75 absolute inset-0" />
        <span className="typography-h1-bold text-white absolute">
          IPO Pre-Approval
        </span>
      </div>
    </>
  );
};

export default HeroSOA;
