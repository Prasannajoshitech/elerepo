"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import {
  IActData,
  IActDocumentList,
  IActRecord,
} from "@/Interface/document.interface";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import CategorySidebar from "./CategorySidebar";
import DocumentList from "./DocumentList";

interface Props {
  documentData: IActData;
  slug1: string;
}

const PER_PAGE = 4;

const DocumentPage: React.FC<Props> = ({ documentData, slug1 }) => {
  const categories: IActRecord[] = useMemo(
    () => documentData?.records ?? [],
    [documentData]
  );

  //   console.log(documentData, "documentDatadocumentData");

  const router = useRouter();

  const [slug, setSlug] = useState<string>(slug1);

  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const foundCategory = categories.find((cat) => cat.sub_ctg_slug === slug);
    if (foundCategory) {
      setSelectedCategory(foundCategory.name);
    }
  }, [slug, categories]);

  const { data: categoryDocumentData } = useGetDataQuery<{
    data: {
      data: IActRecord;
      document_list: IActDocumentList[];
    };
  }>({
    url: `${endpoints.categoryDetail}/${slug}/`,
  });

  const handleCategoryClick = (category: IActRecord) => {
    setSelectedCategory(category.name);
    setSlug(category.sub_ctg_slug);
    setCurrentPage(1);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set("slug", category.sub_ctg_slug);
    router.push(`?${newSearchParams.toString()}`);
  };

  const allDocuments: IActDocumentList[] =
    categoryDocumentData?.data?.document_list ?? [];
  const pageCount = Math.ceil(allDocuments.length / PER_PAGE);

  return (
    <div className="container mx-auto py-[2.5rem] px-[1rem] lg:px-[3.12rem] rounded-[0.65rem] bg-background-100 my-[1.5rem] lg:my-[2.5rem]">
      <h1 className="typography-h3 text-text-500 font-semibold mb-4 lg:mb-8">
        {categories[0]?.main_category}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10">
        <CategorySidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />

        <DocumentList
          documents={allDocuments}
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default DocumentPage;
