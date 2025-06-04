// components/FooterLinks.tsx

import React from "react";
import { AffiliatedOrganizations, ImportantLinks } from "@/data/footer";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const ImportantLinksSection = () => {
  const t = useTranslations("FooterLinks");

  return (
    <div>
      <h2 className="mb-[1.5rem] text-white typography-p-large font-semibold">
        Important Links
      </h2>
      <ul className="text-white font-medium typography-p-regular space-y-[1.25rem]">
        {ImportantLinks.map((link, index) => (
          <div key={index}>
            <Link
              href={link.url}
              className="border-l rounded-[0.25rem] py-[0.1875rem] px-[0.625rem] cursor-pointer"
            >
              {t(link.label)}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export const AffiliatedOrganizationsSection = () => {
  const t = useTranslations("FooterLinks");

  return (
    <div>
      <h2 className="mb-[1.5rem] text-white typography-p-large font-semibold">
        Affiliated Organizations
      </h2>
      <ul className="text-white font-medium typography-p-regular space-y-[1.25rem]">
        {AffiliatedOrganizations.map((item, index) => (
          <div key={index}>
            <Link
              href={item.url}
              className="border-l rounded-[0.25rem] py-[0.1875rem] px-[0.625rem] cursor-pointer"
            >
              {t(item.label)}
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};
