interface Endpoints {
  homeHero: string;
  homeImpService: string;
  homeMissionVision: string;
  homeTeam: string;
}

export const endpoints: Endpoints = {
  homeHero: "/homepage/list",
  homeImpService: "/services/list",
  homeMissionVision: "/about/list/",
  homeTeam: "/team/list",
};

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;
