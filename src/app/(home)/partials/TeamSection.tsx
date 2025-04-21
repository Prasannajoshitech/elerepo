import Image from "next/image";
import React from "react";
import ceo from "@/assets/home/team/ceo.png";
import connector from "@/assets/home/line.png";
import { CiMail } from "react-icons/ci";
import { teamMember } from "@/data/teamMember";
import Link from "next/link";

const TeamSection = () => {
  return (
    <div className="padding-x relative mb-[2.5rem]">
      <div className="w-[21.53331rem] mx-auto mb-[1.5rem] lg:mb-[10rem]">
        {/* Image */}
        <div className="aspect-[344.53/272.00]">
          <Image
            src={ceo}
            alt="ceo"
            width={800}
            height={800}
            className="w-full h-full object-cover"
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

      <div className="hidden lg:block absolute -bottom-5.5 right-3 w-full">
        <Image
          src={connector}
          alt="connector-line"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
        {teamMember?.map((team, index) => (
          <div key={index} className="lg:w-[19.25rem]">
            {/* Image */}
            <div className="aspect-[344.53/272.00]">
              <Image
                src={team?.image}
                alt="ceo"
                width={800}
                height={800}
                className="w-full h-full object-cover"
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
