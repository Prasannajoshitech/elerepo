import React from "react";

const AboutPage = () => {
  return (
    <>
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
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(category)}
                  className={`py-3 px-4 text-left rounded-md transition-colors ${
                    selectedCategory === category.name
                      ? "bg-blue-300 text-white"
                      : "hover:bg-blue-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Document Listings */}
          <div className="md:col-span-3 space-y-[0.62rem]">
            {categoryDocumentData?.document_list.map(
              (doc: IDocumentDocumentList) => (
                <DocumentCard
                  key={doc.id}
                  title={doc.title}
                  date={doc?.created_at}
                  slug={doc?.slug}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
