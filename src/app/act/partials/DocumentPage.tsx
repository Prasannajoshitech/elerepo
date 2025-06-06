"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import CustomPagination from "@/components/CustomPagination";
import {
  IActData,
  IActDocumentList,
  IActRecord,
} from "@/Interface/document.interface";
import { useState } from "react";
import DocumentCard from "./DocumentCard";

interface Props {
  documentData: IActData;
}

const PER_PAGE = 4;

const DocumentPage: React.FC<Props> = ({ documentData }) => {
  const categories: IActRecord[] = documentData?.records ?? [];

  const [slug, setSlug] = useState<string>(categories[0]?.sub_ctg_slug ?? "");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]?.name ?? ""
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetch documents for the selected slug
  const { data: categoryDocumentData } = useGetDataQuery<{
    data: {
      data: IActRecord;
      document_list: IActDocumentList[];
    };
  }>({
    url: `${endpoints.categoryDetail}/${slug}/`,
  });

  // Handle Category Click
  const handleCategoryClick = (category: {
    name: string;
    sub_ctg_slug: string;
  }) => {
    setSelectedCategory(category.name);
    setSlug(category.sub_ctg_slug);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const allDocuments: IActDocumentList[] =
    categoryDocumentData?.data?.document_list ?? [];

  // Pagination Logic
  const totalItems = allDocuments.length;
  const pageCount = Math.ceil(totalItems / PER_PAGE);

  const paginatedDocs = allDocuments.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.65rem] bg-background-100 my-[1.5rem] lg:my-[2.5rem]">
      <h1 className="typography-h3 text-text-500 font-semibold mb-4 lg:mb-8">
        {categories[0]?.main_category}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10">
        {/* Sidebar */}
        <aside className="bg-[#EEF8FF] rounded-[0.25rem] p-[1.25rem]">
          <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
            {selectedCategory}
          </h2>

          <nav className="flex flex-col space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`py-3 px-4 text-left rounded-md transition-colors ${
                  selectedCategory === category.name
                    ? "bg-blue-300 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Document Listings */}
        <section className="md:col-span-3 space-y-[0.62rem]">
          {paginatedDocs.length > 0 ? (
            paginatedDocs.map((doc) => (
              <DocumentCard
                key={doc.id}
                title={doc.title}
                date={doc.created_at}
                slug={doc.slug}
              />
            ))
          ) : (
            <p>No documents found.</p>
          )}
        </section>
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="mt-6">
          <CustomPagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentPage;
