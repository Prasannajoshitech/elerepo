import Image from "next/image";
import React from "react";

interface Props {
  orgazizationData: {
    title: string;
    description: string;
    image: string;
  };
}

const OrganizationStructure: React.FC<Props> = ({ orgazizationData }) => {
  return (
    <div className="padding-x my-10">
      <p className="typography-h3-bold text-text-500 pb-[1.25rem]">
        Organizational Structure
      </p>
      <div className="w-full aspect-[1353.57/962.00] ">
        <Image
          src={orgazizationData?.image}
          alt="ceo"
          width={800}
          height={800}
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default OrganizationStructure;
