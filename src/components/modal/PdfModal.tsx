"use client";
import { useState } from "react";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { X } from "lucide-react";
import DisplayPdf from "../PdfViewer";
import { IActDetailData } from "@/app/act/[slug]/interface/actDetail.interface";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PdfModal = ({ isOpen, onClose }: PdfModalProps) => {
  const { data } = useGetDataQuery({
    url: endpoints.popup,
  });

  // Filter files where is_active is true
  const files: IActDetailData[] =
    data?.data?.filter((item: IActDetailData) => item.is_active) || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < files.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onClose();
      setCurrentIndex(0);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/60">
          <button
            onClick={handleNext}
            className="top-[30%] lg:top-5 right-5 z-10 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
          >
            <X size={24} className="font-bold text-white" />
          </button>

          <div className="flex items-center justify-center w-full h-full">
            {files.length > 0 && (
              <DisplayPdf actDetailData={files[currentIndex]} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PdfModal;
