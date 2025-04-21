import React from "react";
import Hero from "./partials/Hero";
import ImpServices from "./partials/ImpServices";
import MissionVision from "./partials/MissionVision";
import LatestNotices from "./partials/LatestNotices";
import TeamSection from "./partials/TeamSection";
import MandatesCommission from "./partials/MandatesCommission";
import TeamBottom from "./partials/TeamBottom";

const Home = () => {
  return (
    <div>
      <Hero />
      <ImpServices />
      <MissionVision />
      <LatestNotices />
      <TeamSection />
      <MandatesCommission />
      <TeamBottom />
    </div>
  );
};

export default Home;
