import React from "react";
import missionIcon from "@/app/about/partials/icons/mission.svg";
import vissionIcon from "@/app/about/partials/icons/vission.svg";
import Image from "next/image";

const MissionVission = () => {
  return (
    <div className="mt-10">
      <p className="typography-h3-bold text-text-500">Mission and Vision</p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        {/* First Column */}
        <div className="px-10 pt-10 pb-14 bg-white rounded-lg">
          {/* Logo Icon */}
          <div>
            <Image
              src={missionIcon}
              alt="mission"

              width={80}
              height={80}
              className="w-20 h-20 object-cover object-center"
            />
          </div>

          <div className="mt-3.5 flex flex-col gap-2.5">
            <p className="typography-p-large-semi-bold text-text-500">
              Mission
            </p>
            <p className="typography-p-regular text-text-400">
              To be a trusted and independent regulatory body ensuring a
              transparent, competitive, and sustainable electricity sector for
              the prosperity and wellbeing of Nepal.
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="px-10 pt-10 pb-14 bg-white rounded-lg">
          {/* Logo Icon */}
          <div>
            <Image
              src={vissionIcon}
              alt="vission"

              width={80}
              height={80}
              className="w-20 h-20 object-cover object-center"
            />
          </div>

          <div className="mt-3.5 flex flex-col gap-2.5">
            <p className="typography-p-large-semi-bold text-text-500">
              Vission
            </p>
            <p className="typography-p-regular text-text-400">
              To regulate, supervise, and guide the generation, transmission,
              distribution, and trade of electricity in Nepal with the aim of
              ensuring reliable, affordable, and accessible energy services for
              all
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;
