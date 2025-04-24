"use client";
import CustomPagination from "@/components/CustomPagination";
import { documents } from "@/data/actDocument";
import { useState } from "react";
import DocumentCard from "./DocumentCard";
import { IDocumentDaum } from "@/Interface/document.interface";

interface Props {
  documentData: IDocumentDaum[];
}

const PER_PAGE = 4;

const DocumentPage: React.FC<Props> = () => {
  // console.log(documentData, "dataaa");

  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof documents>("Act & Rules");
  const [currentPage, setCurrentPage] = useState(1);

  const selectedDocs = documents[selectedCategory] || [];
  const totalItems = selectedDocs.length;
  const pageCount = Math.ceil(totalItems / PER_PAGE);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Get paginated docs for the current page
  const paginatedDocs = selectedDocs.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  // Reset page to 1 if category changes
  const handleCategoryChange = (category: keyof typeof documents) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.65rem] bg-background-100 my-[1.5rem] lg:my-[2.5rem]">
      <h1 className="typography-h3 text-text-500 font-semibold mb-4 lg:mb-8">
        {selectedCategory}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10">
        {/* Sidebar */}
        <div className="bg-[#EEF8FF] rounded-[0.25rem] p-[1.25rem]">
          <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
            Laws & Regulations
          </h2>

          <nav className="flex flex-col space-y-2">
            {Object.keys(documents).map((category) => (
              <button
                key={category}
                onClick={() =>
                  handleCategoryChange(category as keyof typeof documents)
                }
                className={`py-3 px-4 text-left rounded-md transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-300 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Document Listings */}
        <div className="md:col-span-3 space-y-[0.62rem]">
          {paginatedDocs.map((doc, index) => (
            <DocumentCard key={index} title={doc.title} date={doc.date} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6">
        <CustomPagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default DocumentPage;
