"use client";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  designation: string;
  email?: string;
  image: string;
  isChairperson?: boolean;
}

const TeamCard = ({
  name,
  designation,
  image,
  isChairperson = false,
}: TeamCardProps) => {
  return (
    <div className="w-full  group  flex flex-col bg-background-100 border-2 border-background-100 rounded-[0.5rem]">
      {/* Image */}
      <div className=" aspect-[260/290] overflow-hidden cursor-pointer w-full rounded-t-[0.5rem]">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-full rounded-t-[0.5rem] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* Text */}
      <div className="overflow-hidden flex justify-self-center h-44">
        <div className="p-[0.57rem] lg:p-[1.56rem] flex flex-col justify-between items text-center  w-full">
          {" "}
          <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem] ">
            {name}
          </h2>
          <h3 className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
            {designation}
          </h3>
          {!isChairperson ? (
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer justify-self-end">
              View Profile
            </button>
          ) : (
            <div className="flex gap-2 w-full">
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer justify-self-end w-1/2">
                View Profile
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer justify-self-end w-1/2">
                Message
              </button>
            </div>
          )}
          {/* <Link
            href={`mailto:${email}`}
            className="typography-regular text-text-500 font-medium flex items-center lg:gap-[0.28rem] cursor-pointer"
          >
            <CiMail />
            {email}
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
