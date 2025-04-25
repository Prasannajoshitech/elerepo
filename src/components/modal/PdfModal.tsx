"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { IActDetailData } from "@/app/act/[slug]/interface/actDetail.interface";
import { X } from "lucide-react";
import DisplayPdf from "../PdfViewer";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PdfModal = ({ isOpen, onClose }: PdfModalProps) => {
  const { data } = useGetDataQuery({
    url: endpoints.popup,
  });

  const actDetailData: IActDetailData = data?.data[0];

  return (
    <>
      {isOpen && (
        <div className="z-50 fixed inset-0 flex  justify-center items-center bg-black/60 ">
          <button
            onClick={onClose}
            className="top-[30%] lg:top-5 right-5 z-10 absolute flex justify-center items-center p-2 border border-white rounded-full w-10 h-10 cursor-pointer"
          >
            <X size={24} className="font-bold text-white" />
          </button>

          <div className="flex items-center justify-center w-full h-full">
            <DisplayPdf actDetailData={actDetailData} />
          </div>
        </div>
      )}
    </>
  );
};
export default PdfModal;
