import Image from "next/image";
import React from "react";
import ceo from "@/assets/home/team/ceo.png";
import connector from "@/assets/home/linee.png";
import { CiMail } from "react-icons/ci";
import { teamMember } from "@/data/teamMember";
import Link from "next/link";

const TeamSection = () => {
  return (
    <div className="padding-x  mb-[2.5rem]">
      {/* Chairperson Block */}
      <div className="w-[21.53331rem] mx-auto group">
        {/* Image with hover effect */}
        <div className="aspect-[344.53/272.00] overflow-hidden cursor-pointer">
          <Image
            src={ceo}
            alt="ceo"
            width={800}
            height={800}
            className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Text box */}
        <div className="bg-background-100 border-2 border-background-100 rounded-[0.5rem]">
          <div className="p-[1.56rem]">
            <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
              Dr. Ram Prasad Dhital
            </h2>
            <h3 className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
              Chairperson
            </h3>
            <p className="typography-regular text-text-500 font-medium flex items-center gap-[0.28rem] cursor-pointer">
              <CiMail />
              ram.dhital@erc.gov.np
            </p>
          </div>
        </div>
      </div>

      {/* Connector line */}
      <div className="hidden lg:block w-full px-[12%] -mt-2">
        <Image
          src={connector}
          alt="connector-line"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Other team members */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 max-w-[280rem] mx-auto ">
        {teamMember?.map((team, index) => (
          <div key={index} className="lg:w-[19.25rem] group  mx-auto">
            {/* Image */}
            <div className="aspect-[344.53/272.00] overflow-hidden cursor-pointer">
              <Image
                src={team?.image}
                alt={team?.name}
                width={800}
                height={800}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Text box */}
            <div className=" bg-background-100 border-2 border-background-100 rounded-[0.5rem] overflow-hidden">
              <div className="p-[0.57rem] lg:p-[1.56rem]">
                <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
                  {team?.name}
                </h2>
                <h3 className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
                  {team?.position}
                </h3>

                <Link
                  href={`mailto:${team?.mail}`}
                  className="typography-regular text-text-500 font-medium flex items-center lg:gap-[0.28rem] cursor-pointer"
                >
                  <CiMail />
                  {team?.mail}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
