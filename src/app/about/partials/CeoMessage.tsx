import Image from "next/image";
import React from "react";

interface Props {
  ceoMessage: {
    name: string;
    designation: string;
    image: string;
    message: string;
  };
}

const CeoMessage: React.FC<Props> = ({ ceoMessage }) => {
  return (
    <div className="padding-x my-10">
      <h3 className="typography-h3-bold pb-[0.75rem] text-text-500">
        Message from Chairperson
      </h3>

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-[2.5rem]">
        {/* message from ceo  */}
        <p
          className="text-text-400 typography-p1-regular text-justify"
          dangerouslySetInnerHTML={{
            __html: ceoMessage?.message || "",
          }}
        />

        {/* image of ceo  */}
        <div>
          {/* Image with hover effect */}
          <div className="w-full lg:w-[24.48931rem] lg:aspect-[391.83/459.00] ">
            <Image
              src={ceoMessage?.image}
              alt="ceo"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text box */}
          <div className=" text-center pt-[1.25rem]">
            <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
              {ceoMessage?.name}
            </h2>
            <h3 className="typography-p-regular text-text-500 font-bold ">
              {ceoMessage?.designation}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoMessage;
