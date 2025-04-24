import React from "react";
import HeroSection from "./partials/HeroSection";
import Introduction from "./partials/Introduction";
import MissionVission from "./partials/MissionVission";
import GoalsObjective from "./partials/GoalsObjective";
import FunctionDuties from "./partials/FunctionDuties";

const AboutUs = () => {
  return (
    <div className="padding-x bg-background-400 ">
      <HeroSection />
      <Introduction />
      <MissionVission />
      <GoalsObjective />
      <FunctionDuties />
    </div>
  );
};

export default AboutUs;
