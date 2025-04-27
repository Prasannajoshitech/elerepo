import Image from "next/image";
import React from "react";
import Link from "next/link";
import { photoGallery } from "@/data/photos";

const PhotoAlbum = () => {
  return (
    <div>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Photo Gallery
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem] ">
        {photoGallery?.map((photo, index) => (
          <div key={index} className="flex flex-col lg:gap-[0.88rem]">
            <Link
              href="photo-gallery/photo-gallery-detail"
              className="lg:w-[26.15625rem] lg:aspect-[418.50/279.00]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-[0.5rem]"
              />
            </Link>
            <div className="lg:w-[26.15625rem] rounded-[0.5rem] border-[0.15px] border-text-50 bg-background-50 shadow-[0px_2px_18px_4px rgba(0,0,0,0.06)] mt-2">
              <p className="pl-[1.5rem] py-[0.88rem] text-text-500 typography-p1-regular font-semibold">
                {photo.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoAlbum;
