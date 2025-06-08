import { IActDocumentList } from "@/Interface/document.interface";
import CustomPagination from "@/components/CustomPagination";
import DocumentCard from "../partials/DocumentCard";

interface DocumentListProps {
  documents: IActDocumentList[];
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const PER_PAGE = 4;

const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  currentPage,
  pageCount,
  onPageChange,
}) => {
  const paginatedDocs = documents.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
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

      {pageCount > 1 && (
        <div className="mt-6">
          <CustomPagination
            currentPage={currentPage}
            pageCount={pageCount}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </section>
  );
};

export default DocumentList;
