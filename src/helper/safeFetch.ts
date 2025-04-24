import { getData } from "@/api/axios";

export const safeFetch = async (endpoint: string) => {
  try {
    return await getData(endpoint);
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error);
    return null;
  }
};
