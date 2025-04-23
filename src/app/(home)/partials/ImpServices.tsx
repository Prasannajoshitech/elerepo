import Image from "next/image";
import React from "react";
import { IImpServiceDaum } from "../interface/homeImpService.interface";

interface Props {
  impServiceData: IImpServiceDaum[];
}

const ImpServices: React.FC<Props> = ({ impServiceData }) => {
  return (
    <div className="padding-x grid sm:grid-cols-2 lg:grid-cols-4 gap-[1.25rem] mb-[1.5rem] lg:mb-[2.5rem]">
      {impServiceData?.map((service, index) => (
        <div
          key={index}
          className="bg-background-50 p-[1.5rem] rounded-[0.5rem] cursor-pointer border border-transparent transform transition-all duration-300 ease-in-out hover:border-blue-500 hover:scale-[1.02]"
        >
          <div className="flex gap-[0.75rem] items-center">
            <div className="bg-blue-400 rounded-[0.5rem] px-[0.88rem] pt-[0.84rem] pb-[0.91rem]">
              <div className="w-[2.10938rem] h-[2.10938rem]">
                <Image
                  src={service?.icon}
                  alt="Important Services"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-[187px]">
              <h2 className="typography-p-large font-semibold text-text-500 pb-[0.25rem]">
                {service?.name}
              </h2>
              <p className="text-text-400 typography-p-regular">
                {service?.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImpServices;
