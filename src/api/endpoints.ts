interface Endpoints {
  organizationSetting: string;
  navLinks: string;
  homeHero: string;
  homeImpService: string;
  about: string;
  aboutOrganizational: string;

  homeTeam: string;
  document: string;
  actRule: string;
  categoryDetail: string;
  actDetail: string;

  aboutFunctionDuties: string;

  contact: string;
}

export const endpoints: Endpoints = {
  organizationSetting: "/organization/list/",
  navLinks: "/maincategory/list/",

  homeHero: "/homepage/list",
  homeImpService: "/services/list",
  about: "/about/list/",
  aboutOrganizational: "/about/organizational-structure/list/",

  homeTeam: "/team/list",
  document: "/document/list/",
  actRule: "/subcategory/bydocumentlist/",
  categoryDetail: "/subcategory/detail",

  actDetail: "/document/detail",

  aboutFunctionDuties: "/about/function-duties-authorities/list/",

  contact: "/contact/create/",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
