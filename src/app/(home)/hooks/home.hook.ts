import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const getHomePageData = async () => {
  const safeFetch = async (endpoint: string) => {
    try {
      return await getData(endpoint);
    } catch (error) {
      console.error(`Failed to fetch data from ${endpoint}:`, error);
      return null;
    }
  };

  const homeData = await safeFetch(endpoints.homeHero);
  const impServiceData = await safeFetch(endpoints.homeImpService);
  const missionVisionData = await safeFetch(endpoints.homeMissionVision);
  const teamData = await safeFetch(endpoints.homeTeam);

  return {
    homeData,
    impServiceData,
    missionVisionData,
    teamData,
  };
};
