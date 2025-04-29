import React from "react";
import PhotoAlbum from "./partials/PhotoAlbum";
import { getGalleryPageData } from "./hooks/photoGallery.hooks";
import ErrorMessage from "@/components/ErrorMessage";

const PhotoGallery = async () => {
  try {
    const { photoGalleryData, photoGalleryBanner } = await getGalleryPageData();

    return (
      <div className="padding-x my-10">
        <PhotoAlbum
          photoData={photoGalleryData}
          photoGalleryBanner={photoGalleryBanner?.data}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching photo gallery data:", error);
    return <ErrorMessage />;
  }
};

export default PhotoGallery;
