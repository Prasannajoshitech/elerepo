import React from "react";
import HeroSection from "./partials/HeroSection";
import Introduction from "./partials/Introduction";
import MissionVission from "./partials/MissionVission";
import GoalsObjective from "./partials/GoalsObjective";
import FunctionDuties from "./partials/FunctionDuties";
import ErrorMessage from "@/components/ErrorMessage";
import TeamSection from "@/components/TeamSection";
import OrganizationStructure from "./partials/OrganizationStructure";
import { getAboutPageData } from "./hooks/about.hook";
import CeoMessage from "./partials/CeoMessage";
import EmployeeDetail from "./partials/EmployeeDetail";

const AboutUs = async () => {
  try {
    const { aboutData, teamData, functionDutiesData } =
      await getAboutPageData();

    // console.log(messageChairperson, "messageChairperson");

    return (
      <div className=" bg-background-400 ">
        <HeroSection />

        <Introduction introData={aboutData?.data[0]} />

        <MissionVission
          missionVisionData={aboutData?.data[0]?.mission_vision}
        />
        <GoalsObjective
          goalsObjectiveData={aboutData?.data[0]?.goals_objectives}
        />
        <FunctionDuties functionDuties={functionDutiesData?.data[0]} />

        <div className="padding-x">
          <p className="typography-h3-bold text-text-500 pb-[1.25rem]">
            Commission
          </p>
          <TeamSection teamData={teamData?.data} />
        </div>

        <OrganizationStructure />

        <CeoMessage />
        <EmployeeDetail teamData={teamData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return <ErrorMessage />;
  }
};

export default AboutUs;
