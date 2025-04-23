interface Endpoints {
  organizationSetting: string;
  homeHero: string;
  homeImpService: string;
  homeMissionVision: string;
  homeTeam: string;
  document: string;

  contact: string;
}

export const endpoints: Endpoints = {
  organizationSetting: "/organization/list/",
  homeHero: "/homepage/list",
  homeImpService: "/services/list",
  homeMissionVision: "/about/list/",
  homeTeam: "/team/list",
  document: "/document/list/",

  contact: "/contact/create/",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
