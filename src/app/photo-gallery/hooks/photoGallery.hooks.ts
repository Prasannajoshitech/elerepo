import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getGalleryPageData = async () => {
  const photoGalleryData = await safeFetch(endpoints.photoGallery);

  return {
    photoGalleryData,
  };
};
