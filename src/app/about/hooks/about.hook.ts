import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const getAboutPageData = async () => {
  const safeFetch = async (endpoint: string) => {
    try {
      return await getData(endpoint);
    } catch (error) {
      console.error(`Failed to fetch data from ${endpoint}:`, error);
      return null;
    }
  };

  const aboutData = await safeFetch(endpoints.about);
  const functionDutiesData = await safeFetch(endpoints.aboutFunctionDuties);
  const teamData = await safeFetch(endpoints.homeTeam);
  const messageChairperson = await safeFetch(endpoints.messageChairperson);

  return {
    aboutData,
    functionDutiesData,
    teamData,
    messageChairperson,
  };
};
