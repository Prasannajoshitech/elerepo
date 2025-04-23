import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

export const getGlobalData = async () => {
  const safeFetch = async (endpoint: string) => {
    try {
      return await getData(endpoint);
    } catch (error) {
      console.error(`Failed to fetch data from ${endpoint}:`, error);
      return null;
    }
  };

  const organizationSettingData = await safeFetch(
    endpoints.organizationSetting
  );
  const impServiceData = await safeFetch(endpoints.homeImpService);
  const missionVisionData = await safeFetch(endpoints.homeMissionVision);
  const teamData = await safeFetch(endpoints.homeTeam);
  const documentData = await safeFetch(endpoints.document);

  return {
    organizationSettingData,
    impServiceData,
    missionVisionData,
    teamData,
    documentData,
  };
};
