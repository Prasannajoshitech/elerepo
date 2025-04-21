import React from "react";
import Hero from "./partials/Hero";
import ImpServices from "./partials/ImpServices";
import MissionVision from "./partials/MissionVision";
import LatestNotices from "./partials/LatestNotices";
import TeamSection from "./partials/TeamSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ImpServices />
      <MissionVision />
      <LatestNotices />
      <TeamSection />
    </div>
  );
};

export default Home;
