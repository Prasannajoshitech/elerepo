import Image from "next/image";
import React from "react";

interface IProps {
  data: {
    icon: string;
    title: string;
    subTitle: string;
  };
}

const ContactUsCard: React.FC<IProps> = ({ data }) => {
  return (
    <div className="p-5 rounded-lg bg-[rgba(255,255,255,0.50)] shadow-xs">
      <div className="flex items-center gap-5">
        <Image
          alt={data.icon}
          src={data.icon}
          width={44}
          height={44}

          className="w-11"
        />
        <div>
          <p className="typography-p-regular-medium text-black">{data.title}</p>
          <p className="typography-p-regular text-text-300">{data.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
