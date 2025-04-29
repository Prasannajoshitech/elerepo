"use client";
import banner from "@/assets/photoGallery/photoBanner.png";
import CustomPagination from "@/components/CustomPagination";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IPhotoDaum } from "../interface/photo.interface";

interface Props {
  photoData: IPhotoDaum[];
}

const PER_PAGE = 4;
const PhotoAlbum: React.FC<Props> = ({ photoData }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const pageCount = Math.ceil(photoData?.length / PER_PAGE);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };
  return (
    <div>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Photo Gallery
      </h3>

      {/* photo banner  */}
      <div className="w-full lg:h-[30rem] mb-[3.03rem]">
        <Image
          src={banner}
          alt="photo-banner"
          width={800}
          height={800}
          className="w-full h-full object-cover"
        ></Image>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem] mb-[2.5rem]">
        {photoData?.map((photo, index) => (
          <div key={index} className="flex flex-col lg:gap-[0.88rem] group">
            <Link
              href={`photo-gallery/${photo?.id}`}
              className="w-full lg:w-[26.15625rem]  lg:aspect-[418.50/279] overflow-hidden"
            >
              <Image
                src={photo?.thumbnail}
                alt={photo?.title || "photo"}
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-[0.5rem] transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </Link>
            <div className="lg:w-[26.15625rem] rounded-[0.5rem] border-[0.15px] border-text-50 bg-background-50 shadow-[0px_2px_18px_4px rgba(0,0,0,0.06)] mt-2 lg:mt-0">
              <p className="p-2 lg:pl-[1.5rem] py-2 lg:py-[0.88rem] text-text-500 typography-p1-regular font-medium lg:font-semibold">
                {photo?.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalItems={photoData?.length}
        pageCount={pageCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PhotoAlbum;
