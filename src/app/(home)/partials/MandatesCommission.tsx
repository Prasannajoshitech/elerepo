import React from "react";
import { IMissionVisionGoalsObjec } from "../interface/homeMissionVision.interface";
import ObjectiveCard from "@/components/ObjectiveCard";

interface Props {
  mandatesData: IMissionVisionGoalsObjec[];
}

const MandatesCommission: React.FC<Props> = ({ mandatesData }) => {
  return (
    <div className="padding-x mb-[1.5rem] lg:mb-[2.5rem]">
      <h3 className="text-text-500 font-bold typography-h3 leading-[150%] pb-[1.25rem]">
        Mandates of the Commission
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {mandatesData?.map((mandate, index) => (
          <ObjectiveCard
            key={index}
            ordering={mandate?.ordering}
            title={mandate?.title}
            description={mandate?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MandatesCommission;
