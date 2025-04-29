import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getGalleryPageData = async () => {
  const photoGalleryData = await safeFetch(endpoints.photoGallery);
  const photoGalleryBanner = await safeFetch(endpoints.photoGalleryBanner);

  return {
    photoGalleryData,
    photoGalleryBanner,
  };
};
