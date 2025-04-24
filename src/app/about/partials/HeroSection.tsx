import React from "react";

const HeroSection = () => {
  const heroSectionData = {
    image:
      "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Contact Us",
  };

  return (
    <div className="py-10">
      <div
        style={{
          backgroundImage: `url(${heroSectionData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[12rem] w-full relative rounded-lg overflow-hidden flex justify-center items-center"
      >
        <div className="bg-[#003386BD]/75 absolute inset-0" />
        <span className="typography-h1-bold text-white absolute">
          {heroSectionData.text}
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
