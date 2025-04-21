import React from "react";
import ContactHeroSection from "../about/partials/HeroSection";
import GetInTouch from "./partials/GetInTouch";
import Location from "./partials/Location";

const page = () => {
  const heroSectionData = {
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Contact Us",
  };
  return (
    <div className="padding-x bg-background-400 border border-green-500">
      <ContactHeroSection data={heroSectionData} />
      <GetInTouch />

      <Location />
    </div>
  );
};

export default page;
