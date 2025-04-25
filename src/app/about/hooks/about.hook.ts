import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getAboutPageData = async () => {
  const aboutData = await safeFetch(endpoints.about);
  const functionDutiesData = await safeFetch(endpoints.aboutFunctionDuties);
  const teamData = await safeFetch(endpoints.homeTeam);
  const aboutOrganizational = await safeFetch(endpoints.aboutOrganizational);

  return {
    aboutData,
    functionDutiesData,
    teamData,
    aboutOrganizational,
  };
};
