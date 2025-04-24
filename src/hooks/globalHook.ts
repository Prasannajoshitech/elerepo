import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

const safeFetch = async (endpoint: string) => {
  try {
    return await getData(endpoint);
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error);
    return null;
  }
};

export const getOrganizationSettingData = async () => {
  const organizationSettingData = await safeFetch(
    endpoints.organizationSetting
  );
  return organizationSettingData;
};

export const getNavLinksData = async () => {
  const navLinks = await safeFetch(endpoints.navLinks);
  return navLinks;
};
