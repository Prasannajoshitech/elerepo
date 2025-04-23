import React from "react";
import Image from "next/image";
import icon from "./icons/location.svg"; // Example icon

const contactData = [
  {
    icon: icon, // You can import more icons if needed
    title: "Our Office",
    subTitle: "123 Main Street, Springfield, USA",
  },
  {
    icon: icon,
    title: "Customer Support",
    subTitle: "support@example.com",
  },
  {
    icon: icon,
    title: "Phone Number",
    subTitle: "+1 (800) 123-4567",
  },
];

const ContactUs = () => {
  return (
    <div className="space-y-3">
      {contactData.map((data, index) => (
        <div
          key={index}
          className="p-5 rounded-lg bg-[rgba(255,255,255,0.50)] shadow-xs"
        >
          <div className="flex items-center gap-5">
            <Image
              alt={data.title}
              src={data.icon}
              width={44}
              height={44}
              className="w-11"
            />
            <div>
              <p className="typography-p-regular-medium text-black">
                {data.title}
              </p>
              <p className="typography-p-regular text-text-300">
                {data.subTitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
