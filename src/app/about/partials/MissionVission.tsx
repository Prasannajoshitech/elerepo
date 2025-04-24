import { IMissionVisionMissionVision } from "@/app/(home)/interface/homeMissionVision.interface";
import Image from "next/image";
import React from "react";

interface Props {
  missionVisionData: IMissionVisionMissionVision[];
}

const MissionVisionCard: React.FC<IMissionVisionMissionVision> = ({
  icon,
  title,
  description,
}) => (
  <div className="px-10 pt-10 pb-14 bg-white rounded-lg">
    <div>
      <Image
        src={icon}
        alt={title || "Mission/Vision icon"}
        width={80}
        height={80}
        className="w-20 h-20 object-cover object-center"
      />
    </div>
    <div className="mt-3.5 flex flex-col gap-2.5">
      <p className="typography-p-large-semi-bold text-text-500">{title}</p>
      <p className="typography-p-regular text-text-400">{description}</p>
    </div>
  </div>
);

const MissionVision: React.FC<Props> = ({ missionVisionData }) => {
  if (!missionVisionData?.length) return null;

  return (
    <div className="padding-x mt-10">
      <p className="typography-h3-bold text-text-500">Mission and Vision</p>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        {missionVisionData.slice(0, 2).map((item, index) => (
          <MissionVisionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MissionVision;
