import React from "react";
import ContactUsCard from "./ContactUsCard";
import locationIcon from "./icons/location.svg";
import emailIcon from "./icons/email.svg";
import callIcon from "./icons/call.svg";

const ContactUs = () => {
  return (
    <div className="space-y-3">
      <ContactUsCard
        data={{
          icon: locationIcon,
          subTitle: "Sano Gaucharan",
          title: "Head Office",
        }}
      />
      <ContactUsCard
        data={{
          icon: emailIcon,
          subTitle: "info@ecr.gov.np",
          title: "Email Us",
        }}
      />
      <ContactUsCard
        data={{ icon: callIcon, subTitle: "01-442242", title: "Call Us" }}
      />
      <ContactUsCard
        data={{
          icon: callIcon,
          subTitle: "01-442242",
          title: "Toll Free Number",
        }}
      />
    </div>
  );
};

export default ContactUs;
