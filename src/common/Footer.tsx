import { getOrganizationSettingData } from "@/hooks/globalHook";
import { IOrganizationSettingDaum } from "@/Interface/organization.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterFallback from "./FooterFallback";
import {
  AffiliatedOrganizationsSection,
  Company,
  ImportantLinksSection,
  OfficeHorus,
} from "./FooterLinks";

const Footer: React.FC = async () => {
  try {
    // global custom hook
    const organizationSettingData = await getOrganizationSettingData();

    const footerData: IOrganizationSettingDaum =
      organizationSettingData?.data[0];

    return (
      <footer className="footer-gradient padding-x pt-[2.06rem]">
        {/* logos  */}
        <div>
          <div className="flex gap-3 items-center">
            <Link
              href="/"
              className="w-[4.5rem] sm:w-[5rem] md:w-[5.47988rem] aspect-[87.68/74] flex-shrink-0"
            >
              <Image
                src={footerData?.gov_logo}
                alt="Nepal Government Emblem"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
            <div className="text-white w-[9.5rem] sm:w-fit">
              <h1 className="text-lg sm:text-xl notranslate md:text-[1.85125rem] font-semibold leading-[150%] tracking-tight">
                {footerData?.org_name_nepali}
              </h1>
              <p className="text-sm sm:text-base md:text-[0.92563rem] font-medium leading-[120%]">
                {footerData?.org_name_eng}
              </p>
            </div>
            <Link
              href="/"
              className="w-[3.5rem] sm:w-[4.5rem] md:w-[4.875rem] aspect-square flex-shrink-0"
            >
              <Image
                src={footerData?.erc_logo}
                alt="logo"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>

        {/* links  */}
        <div className="pt-[1.5rem] lg:pt-[2.5rem] pb-[1.44rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2.88rem]">
          {/* Company Section */}
          <Company footerData={footerData} />

          <ImportantLinksSection />
          <AffiliatedOrganizationsSection />

          <OfficeHorus officeData={footerData?.office_hours} />
        </div>

        <div className="relative">
          {/* Disclaimer  */}
          <div>
            <p className="typography-p-regular font-semibold text-white pt-[1.44rem] pb-[0.87rem]">
              Disclaimer
            </p>
            <p
              className="text-white typography-p-small pb-[1.94rem] "
              dangerouslySetInnerHTML={{
                __html: footerData?.disclaimer || "",
              }}
            />
          </div>

          {/* Background Image */}
          <div className="absolute inset-0 ">
            <Image
              src="/img-header.png"
              alt="Background Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="border-b-[0.0375rem] border-blue-50 mb-[1.88rem]" />

          <div className="flex justify-between pb-[1.87rem] gap-10">
            <div className="flex gap-[1.25rem] typography-p-regular font-semibold text-white">
              <p>Electricity Regulatory Commission © All Rights Reserved</p>
            </div>
            <div className="flex gap-2 lg:gap-[1.25rem] typography-p-regular font-semibold text-white">
              <Link href={""} className="cursor-pointer">
                Terms & Condition
              </Link>
              <Link href={""} className="cursor-pointer">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return <FooterFallback />;
  }
};

export default Footer;
