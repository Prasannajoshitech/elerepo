import Image from "next/image";
import React from "react";
import facebookIcon from "@/assets/actRuleDetail/facebook.svg";
import messangerIcon from "@/assets/actRuleDetail/messanger.svg";
import xIcon from "@/assets/actRuleDetail/x.svg";
import mailIcon from "@/assets/actRuleDetail/mail.svg";
import shareIcon from "@/assets/actRuleDetail/share.svg";

const Header = () => {
  return (
    <div className="mt-10 padding-x ">
      <div className="flex items-center justify-between">
        {/* Heading */}
        <div>
          <p className="typography-h3-semi-bold text-text-500">
            Electricity Regulatory Commission Rules, 2018
          </p>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Image
            alt="facebook"
            src={facebookIcon}
            width={24}
            height={24}
            className="w-6 h-6 object-cover object-center"
          />
          <Image
            alt="messangerIcon"
            src={messangerIcon}
            width={24}
            height={24}
            className="w-6 h-6 object-cover object-center"
          />
          <Image
            alt="xIcon"
            src={xIcon}
            width={24}
            height={24}
            className="w-6 h-6 object-cover object-center"
          />
          <Image
            alt="mailIcon"
            src={mailIcon}
            width={24}
            height={24}
            className="w-6 h-6 object-cover object-center"
          />
          <Image
            alt="shareIcon"
            src={shareIcon}
            width={24}
            height={24}
            className="w-6 h-6 object-cover object-center"
          />
        </div>
      </div>

      <div className="mt-3.5">
        <p className="typography-p-regular-medium text-text-300">
          Published Date : September 6, 2018
        </p>
      </div>
    </div>
  );
};

export default Header;
