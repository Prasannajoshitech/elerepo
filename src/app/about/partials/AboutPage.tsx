"use client";
import { ReactNode, useState } from "react";
import Introduction from "./Introduction";

interface Section {
  name: string;
  content: ReactNode;
}

const AboutPage = () => {
  // Define all tab data in a single array
  const sections: Section[] = [
    {
      name: "Introduction",
      content: (
        <div>
          <Introduction />
        </div>
      ),
    },
    {
      name: "Vision and Mission",
      content: <div>Mission and Vision content...</div>,
    },
    {
      name: "Electricity Report Overview",
      content: <div>Electricity report content...</div>,
    },
    {
      name: "Functions, Duties & Authorities",
      content: <div>Functions & duties content...</div>,
    },
    {
      name: "Organizational Structure",
      content: <div>Organizational structure content...</div>,
    },
    {
      name: "Message from Chairperson",
      content: <div>Chairperson message...</div>,
    },
    {
      name: "Employee Details",
      content: <div>Employee details content...</div>,
    },
  ];

  const [selectedSection, setSelectedSection] = useState(0);

  const handleCategoryClick = (idx: number) => {
    setSelectedSection(idx);
  };
  return (
    <div className="container mx-auto py-10 px-4 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <aside className="bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
          <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
            About Us
          </h2>
          <nav className="flex flex-col space-y-2">
            {sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryClick(idx)}
                className={`py-3 px-4 text-left rounded-md transition-colors ${
                  selectedSection === idx
                    ? "bg-blue-300 text-white"
                    : "bg-white hover:bg-blue-100 "
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Active Section Content */}
        <main className="md:col-span-3">
          {sections[selectedSection].content}
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
