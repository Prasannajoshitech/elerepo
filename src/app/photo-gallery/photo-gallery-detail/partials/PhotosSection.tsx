import Image from "next/image";
import React from "react";
import album1 from "@/assets/photoGallery/album1.png";
import photo1 from "@/assets/photoGallery/photo1.png";
import photo2 from "@/assets/photoGallery/photo2.png";
import photo3 from "@/assets/photoGallery/photo3.png";

const photoGallery = [
  {
    src: album1,
    alt: "welcome-program",
  },
  {
    src: photo1,
    alt: "welcome-program",
  },
  {
    src: photo2,
    alt: "welcome-program",
  },
  {
    src: photo3,
    alt: "welcome-program",
  },
];

const PhotosSection = () => {
  return (
    <div>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-1 lg:pb-[0.88rem]">
        Photo Gallery
      </h3>

      <p className="typography-p1-regular font-medium text-text-300 leading-[120%] pb-5 lg:pb-10">
        Published Date : September 6, 2018
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[3rem] ">
        {photoGallery.map((photo, index) => (
          <div key={index}>
            <div className="lg:w-[26.15625rem] lg:aspect-[418.50/279.00]">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-[0.5rem]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosSection;
