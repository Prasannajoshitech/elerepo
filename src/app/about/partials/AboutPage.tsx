"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AboutBreadcrumb from "./AboutBreadcrumb";
import { useAboutSidebar } from "./AboutSideTab";

const AboutPage = () => {
  const searchParams = useSearchParams();
  const sections = useAboutSidebar();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const initialTab = parseInt(searchParams.get("tab") || "0", 10);
  const [selectedSection, setSelectedSection] = useState(initialTab);

  useEffect(() => {
    const tab = parseInt(searchParams.get("tab") || "0", 10);
    setSelectedSection(tab);

    const timer = setTimeout(() => {
      contentRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleCategoryClick = (idx: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", idx.toString());
    router.push(`?${newParams.toString()}`, {
      scroll: false,
    });
    setSelectedSection(idx);

    // Immediate scroll for better UX on clicks
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div ref={containerRef} className="w-full mx-auto padding-x">
      <div className="py-10">
        <AboutBreadcrumb sectionName={sections[selectedSection]?.key || ""} />
      </div>

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <aside className="sticky inset-0 bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
            <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
              {sections[selectedSection]?.name}
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
          <main ref={contentRef} className="md:col-span-3 scroll-mt-[100px]">
            {sections[selectedSection]?.content}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
