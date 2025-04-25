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
    const { aboutData, teamData, functionDutiesData, aboutOrganizational } =
      await getAboutPageData();

    return (
      <div className=" bg-background-400 ">
        <HeroSection />

        <div
          className="scroll-m-0.5"
          id={aboutData?.data[0]?.goals_objectives[0]?.slug}
        >
          <Introduction introData={aboutData?.data[0]} />
        </div>

        <div
          className="scroll-m-0.5"
          id={aboutData?.data[0]?.mission_vision[0]?.slug}
        >
          <MissionVission
            missionVisionData={aboutData?.data[0]?.mission_vision}
          />
        </div>

        <GoalsObjective
          goalsObjectiveData={aboutData?.data[0]?.goals_objectives}
        />
        <FunctionDuties functionDuties={functionDutiesData?.data[0]} />

        <div>
          <p className="padding-x typography-h3-bold text-text-500 pb-[1.25rem]">
            Commission
          </p>
          <TeamSection teamData={teamData?.data} />
        </div>

        <OrganizationStructure
          orgazizationData={aboutOrganizational?.data[0]}
        />

        <CeoMessage ceoMessage={teamData?.data[0]} />
        <EmployeeDetail teamData={teamData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching about data:", error);
    return <ErrorMessage />;
  }
};

export default AboutUs;
