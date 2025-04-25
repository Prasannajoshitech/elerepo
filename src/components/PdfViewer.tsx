"use client"; // <--- Mark as a Client Component

import Image from "next/image";
import React, { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import zoomInIcon from "@/assets/actRuleDetail/zoomin.svg";
import zoomOutIcon from "@/assets/actRuleDetail/zoomout.svg";
import expandIcon from "@/assets/actRuleDetail/expand.svg";
import optionIcon from "@/assets/actRuleDetail/option.svg";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IActDetailData } from "../app/act/[slug]/interface/actDetail.interface";

// --- OR --- Use CDN (easier for setup, relies on external source) ---
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

interface IPropf {
  actDetailData: IActDetailData;
}

// --- Your Component ---
export const DisplayPdf: React.FC<IPropf> = ({ actDetailData }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const viewerRef = useRef<HTMLDivElement>(null);
  const pdfUrl = actDetailData?.file; // Path to your PDF in the public folder

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1); // Reset to first page on new document load
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  const previousPage = () => {
    if (pageNumber > 1) {
      changePage(-1);
    }
  };

  const nextPage = () => {
    if (numPages && pageNumber < numPages) {
      changePage(1);
    }
  };
  const toggleFullScreen = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    if (!document.fullscreenElement) {
      viewer.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div ref={viewerRef} className="relative h-full py-4  ">
      <div className="w-fit mx-auto h-full  overflow-hidden  ">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("Error loading PDF:", error)}
          loading={<div>Loading PDF...</div>}
          error={<div>Failed to load PDF file.</div>}
          className={"h-full "}
        >
          {/* You can choose to render only the current page or all pages */}

          <AnimatePresence mode="wait">
            <motion.div
              key={pageNumber}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Page
                scale={scale}
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className={"w-fit h-full"}
                height={750}
              />
            </motion.div>
          </AnimatePresence>

          {/* renderTextLayer={false} and renderAnnotationLayer={false} can improve performance
              if you don't need text selection or annotations. Remove them if you do. */}
        </Document>
      </div>

      {/* Left and Right Navigation for PDF doc */}
      {numPages && (
        <div className="absolute top-1/2 left-0 -translate-x-full translate-y-1/2">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <ChevronLeft
              className={`w-11 h-11  ${pageNumber !== 1 && pageNumber <= numPages ? "text-blue-300" : "text-text-200"}`}
            />
          </button>
        </div>
      )}

      {numPages && (
        <div className="absolute top-1/2 right-0 translate-x-full translate-y-1/2">
          <button
            type="button"
            disabled={numPages ? pageNumber >= numPages : true}
            onClick={nextPage}
          >
            <ChevronRight
              className={`w-11 h-11  ${pageNumber < numPages ? "text-blue-300" : "text-text-200"}`}
            />
          </button>
        </div>
      )}

      {/* bottom Navigation & zoom option  */}
      {numPages && (
        <div className="bg-white shadow-[0px_2px_16px_0px_rgba(0,0,0,0.06)] absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3.5 p-[0.88rem]">
          {/* Previous Page */}
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <ChevronLeft
              className={
                pageNumber !== 1 && pageNumber <= numPages
                  ? "text-blue-300"
                  : "text-text-200"
              }
            />
          </button>

          {/* Page Number */}
          <p>
            {pageNumber}/{numPages}
          </p>

          {/* Next Page */}
          <button
            type="button"
            disabled={numPages ? pageNumber >= numPages : true}
            onClick={nextPage}
          >
            <ChevronRight
              className={
                pageNumber < numPages ? "text-blue-300" : "text-text-200"
              }
            />
          </button>

          {/* Zoom In Icon */}
          <button
            onClick={() => {
              setScale(scale + 0.05);
            }}
            type="button"
          >
            <Image
              alt="zoom in"
              src={zoomInIcon}
              width={24}
              height={24}
              className="w-[1.5rem] aspect-square  object-cover"
            />
          </button>

          {/* Zoom Out Icon */}
          <button
            onClick={() => {
              setScale(scale - 0.05);
            }}
            type="button"
          >
            <Image
              alt="zoom out"
              src={zoomOutIcon}
              width={24}
              height={24}
              className="w-[1.5rem] aspect-square object-cover"
            />
          </button>

          {/* Expand Icon */}
          <button onClick={toggleFullScreen} type="button">
            <Image
              alt="expand icon"
              src={expandIcon}
              width={24}
              height={24}
              className="w-[1.5rem] aspect-square object-cover"
            />
          </button>

          {/* Option */}
          <button type="button">
            <Image
              alt="option icon"
              src={optionIcon}
              width={24}
              height={24}
              className="w-[1.5rem] aspect-square object-cover"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayPdf;
