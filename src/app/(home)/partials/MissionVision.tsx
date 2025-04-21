import Image from "next/image";
import React from "react";
import missionVision from "@/assets/home/mission&vision.png";

const MissionVision = () => {
  return (
    <div className="bg-background-100 rounded-[0.25rem] mb-[2.5rem]">
      <div className="p-[1rem] lg:p-[5rem] flex flex-col lg:flex-row gap-[2.5rem] items-center">
        <div className="lg:w-[37.5rem] lg:h-[25rem]">
          <Image
            src={missionVision}
            alt="mission & vision image"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:max-w-[712px]">
          <h3 className="typography-h3 font-bold leading-[150%] text-text-500 pb-[0.75rem]">
            Our Mission
          </h3>
          <h4 className="typography-p-large text-text-500 font-semibold pb-[0.62rem]">
            Vision
          </h4>
          <p className="typography-p-regular text-text-400 text-justify">
            To make electricity generation, transmission, distribution or trade
            simple, regular, systematic and transparent, to balance the demand
            and supply of electricity, to regulate electricity tariff, to
            protect the rights and interests of electricity consumers, to make
            electricity market competitive and to make electricity service
            reliable, accessible, quality and The vision of this commission is
            to make it safe and establish it as a successful regulatory body of
            Nepal&apos;s power sector.
          </p>
          <h4 className="typography-p-large text-text-500 font-semibold pb-[0.62rem] pt-[0.88]">
            Mission
          </h4>
          <p className="typography-p-regular text-text-400 text-justify">
            In order to improve the quality and reliability of electricity
            services and to increase transparency and accountability among the
            stakeholders related to the power sector, formulate and implement
            regulatory instruments specified in the prevailing laws and
            regulations. Necessary advice and advice to the Government of Nepal
            on policy reforms to make the distribution or trade arrangements
            reliable and effective
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
