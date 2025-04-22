'use client'; // <--- Mark as a Client Component

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import zoomInIcon from '@/assets/actRuleDetail/zoomin.svg'
import zoomOutIcon from '@/assets/actRuleDetail/zoomout.svg'
import expandIcon from '@/assets/actRuleDetail/expand.svg'
import optionIcon from '@/assets/actRuleDetail/option.svg'
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';


// --- Configuration for pdfjs worker ---
// pdf.js needs a worker to process the PDF off the main thread.
// You need to provide the path to the worker file.
// This can often be copied from the `pdfjs-dist` package.
// Check react-pdf documentation for the latest recommended setup,
// especially with bundlers like Webpack (used by Next.js).

// Example: Assuming you have copied the worker file to your public folder
// You might need to install pdfjs-dist: npm install pdfjs-dist
// Then copy node_modules/pdfjs-dist/build/pdf.worker.min.js to public/
// pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

// --- OR --- Use CDN (easier for setup, relies on external source) ---
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
// --- OR --- More robust CDN link
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


interface IPropf {
   path: string
}



// --- Your Component ---
export const DisplayPdf: React.FC<IPropf> = ({ path }) => {
   const [numPages, setNumPages] = useState<number | null>(null);
   const [pageNumber, setPageNumber] = useState<number>(1);
   const [scale, setScale] = useState<number>(1.0);
   const viewerRef = useRef<HTMLDivElement>(null);
   const pdfUrl = path; // Path to your PDF in the public folder

   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
      setPageNumber(1); // Reset to first page on new document load
   }

   function changePage(offset: number) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
   }

   const previousPage = () => {
      if (pageNumber > 1) {
         changePage(-1);
      }
   }

   const nextPage = () => {
      if (numPages && pageNumber < numPages) {
         changePage(1);
      }
   }
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
      <div ref={viewerRef} className='relative px-10 pb-4 w-fit mx-auto'>
         <div className="mt-12 w-fit max-h-fit max-w-4xl mx-auto overflow-hidden">
            <Document
               file={pdfUrl}
               onLoadSuccess={onDocumentLoadSuccess}
               onLoadError={(error) => console.error("Error loading PDF:", error)}
               loading={<div>Loading PDF...</div>}
               error={<div>Failed to load PDF file.</div>}
            >
               {/* You can choose to render only the current page or all pages */}



               <AnimatePresence mode='wait'>
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
                        className={'w-fit'}
                     />
                  </motion.div>
               </AnimatePresence>






               {/* renderTextLayer={false} and renderAnnotationLayer={false} can improve performance
              if you don't need text selection or annotations. Remove them if you do. */}
            </Document>
         </div>

         {/* Icon for page */}
         {
            numPages && <div className='absolute top-1/2 left-0 -translate-x-full translate-y-1/2'>
               <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
                  <ChevronLeft className={`w-11 h-11  ${pageNumber !== 1 && pageNumber <= numPages ? 'text-blue-300' : ''}`} />
               </button>
            </div>
         }

         {
            numPages && <div className='absolute top-1/2 right-0 translate-x-full translate-y-1/2'>
               <button type='button' disabled={numPages ? pageNumber >= numPages : true} onClick={nextPage} >
                  <ChevronRight className={`w-11 h-11  ${pageNumber < numPages ? 'text-blue-300' : ''}`} />
               </button>
            </div>
         }



         {numPages && (
            <div className='bg-white shadow-md absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3.5'>

               {/* Previous Page */}
               <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
                  <ChevronLeft className={pageNumber !== 1 && pageNumber <= numPages ? 'text-blue-300' : ''} />
               </button>

               {/* Page Number */}
               <p>
                  {pageNumber}/{numPages}
               </p>

               {/* Next Page */}
               <button type='button' disabled={numPages ? pageNumber >= numPages : true} onClick={nextPage} >
                  <ChevronRight className={pageNumber < numPages ? 'text-blue-300' : ''} />
               </button>

               {/* Zoom In Icon */}
               <button onClick={() => { setScale(scale + 0.05) }} type='button'>
                  <Image
                     alt='zoom in'
                     src={zoomInIcon}
                     width={24}
                     height={24}
                     className='w-11 h-11 object-center object-cover'
                  />
               </button>

               {/* Zoom Out Icon */}
               <button onClick={() => { setScale(scale - 0.05) }} type='button'>
                  <Image
                     alt='zoom out'
                     src={zoomOutIcon}
                     width={24}
                     height={24}
                     className='w-11 h-11 object-center object-cover'
                  />
               </button>

               {/* Expand Icon */}
               <button onClick={toggleFullScreen} type='button'>
                  <Image
                     alt='expand icon'
                     src={expandIcon}
                     width={24}
                     height={24}
                     className='w-11 h-11 object-center object-cover'
                  />
               </button>

               {/* Option */}
               <button type='button'>
                  <Image
                     alt='option icon'
                     src={optionIcon}
                     width={24}
                     height={24}
                     className='w-11 h-11 object-center object-cover'
                  />
               </button>

            </div>
         )}

      </div>
   );
}

export default DisplayPdf

// --- Optional: Add styling for react-pdf if needed ---
// You might need to import the default styling or create your own
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'react-pdf/dist/esm/Page/TextLayer.css';