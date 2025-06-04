"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { sections } from "./AboutSideTab";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";

const AboutPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialTab = parseInt(searchParams.get("tab") || "0", 10);
  const [selectedSection, setSelectedSection] = useState(initialTab);

  useEffect(() => {
    // Keep state in sync if the URL changes manually
    setSelectedSection(initialTab);
  }, [initialTab]);

  const handleCategoryClick = (idx: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", idx.toString());
    router.push(`?${newParams.toString()}`);
    setSelectedSection(idx);
  };

  const { data: heroSectionData } = useGetDataQuery({
    url: endpoints.heroSection,
  });

  return (
    <>
      <div className="padding-x py-10">
        <div
          style={{
            backgroundImage: `url(${heroSectionData?.data[0]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[8rem] lg:h-[12rem] w-full relative rounded-[0.25rem] overflow-hidden flex justify-center items-center"
        >
          <div className="bg-[#003386BD]/75 absolute inset-0" />
          <span className="typography-h1-bold text-white absolute">
            {sections[selectedSection]?.name}
          </span>
        </div>
      </div>

      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <aside className="sticky inset-0 bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
            <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
              About Us
            </h2>
            <nav className="flex flex-col space-y-2">
              {sections?.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(idx)}
                  className={`py-3 px-4 text-left rounded-md transition-colors ${
                    selectedSection === idx
                      ? "bg-blue-300 text-white"
                      : "bg-white hover:bg-blue-100"
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Active Section Content */}
          <main className="md:col-span-3">
            {sections[selectedSection]?.content}
          </main>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
