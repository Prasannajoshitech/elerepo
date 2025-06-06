import { IOrganizationSettingRoot } from "@/Interface/organization.interface";
import Image, { StaticImageData } from "next/image";
import React from "react";
import defaultIcon from "./icons/location.svg"; // Example icon
import { useTranslations } from "next-intl";

interface Props {
  data: IOrganizationSettingRoot;
}

interface ContactItemProps {
  label: string;
  value: string | undefined;
  icon: string | StaticImageData | undefined;
}

const ContactItem: React.FC<ContactItemProps> = ({ label, value, icon }) => (
  <div className="p-5 rounded-lg bg-[rgba(255,255,255,0.50)] shadow-xs">
    <div className="flex items-center gap-5">
      <Image
        src={icon || defaultIcon}
        alt="icon"
        width={44}
        height={44}
        className="w-11 h-11 object-contain"
      />
      <div>
        <p className="typography-p-regular-medium text-black">{label}</p>
        <p className="typography-p-regular text-text-300">{value || "N/A"}</p>
      </div>
    </div>
  </div>
);

const ContactUs: React.FC<Props> = ({ data }) => {
  const t = useTranslations("OrganizationSetting");

  const info = data?.data[0];

  return (
    <div className="space-y-3">
      <ContactItem
        label={t("HeadOffice")}
        value={info?.office_address}
        icon={info?.office_address_icon}
      />
      <ContactItem
        label={t("EmailUs")}
        value={info?.email}
        icon={info?.email_icon}
      />
      <ContactItem
        label={t("CallUs")}
        value={info?.phone}
        icon={info?.phone_icon}
      />
      <ContactItem
        label={t("FaxNumber")}
        value={info?.fax}
        icon={info?.fax_icon}
      />
    </div>
  );
};

export default ContactUs;
