import React from "react";
import HeroSection from "./partials/HeroSection";
import Introduction from "./partials/Introduction";
import MissionVission from "./partials/MissionVission";
import GoalsObjective from "./partials/GoalsObjective";

const page = () => {
  const heroSectionData = {
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "About Us",
  };
  return (
    <div className="padding-x bg-background-400 pb-10">
      <HeroSection data={heroSectionData} />
      <Introduction />
      <MissionVission />
      <GoalsObjective />
    </div>
  );
};

export default page;
