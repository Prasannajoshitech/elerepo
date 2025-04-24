import React from "react";
import ContactHeroSection from "../about/partials/HeroSection";
import GetInTouch from "./partials/GetInTouch";
import Location from "./partials/Location";
import ErrorMessage from "@/components/ErrorMessage";
import { getOrganizationSettingData } from "@/hooks/globalHook";

const ContactUs = async () => {
  try {
    const organizationSettingData = await getOrganizationSettingData();

    return (
      <div className="padding-x bg-background-400 ">
        <ContactHeroSection />
        <GetInTouch data={organizationSettingData} />

        <Location mapUrl={organizationSettingData?.data[0]?.google_map} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return <ErrorMessage />;
  }
};

export default ContactUs;
