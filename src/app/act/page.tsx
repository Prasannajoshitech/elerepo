"use client";
import { useState } from "react";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { documents } from "@/data/actDocument";
import Image from "next/image";

export default function RegulatoryDocsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof documents>("Act & Rules");

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
                  setSelectedCategory(category as keyof typeof documents)
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
          {documents[selectedCategory]?.map((doc, index) => (
            <DocumentCard key={index} title={doc.title} date={doc.date} />
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentCard({ title, date }: { title: string; date: string }) {
  return (
    <div
      className="flex justify-between items-center 
    py-[1rem] px-[1.25rem] rounded-[0.5rem] border-l-2 border-blue-300 bg-white shadow-[0px_2px_18px_4px rgba(51,96,169,0.06)] group cursor-pointer"
    >
      <div>
        <h3 className="typography-p-large text-text-500 font-medium pb-[0.62rem] group-hover:text-blue-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="typography-p-small text-text-300 font-medium">
          Published Date : {date}
        </p>
      </div>
      <div className="flex items-center gap-[1.75rem]">
        <Link
          href="#"
          className="flex items-center justify-center "
          title="Download PDF"
        >
          <Image
            src="/pdf2.svg"
            alt="pdf"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center "
          title="View Document"
        >
          <IoEyeSharp className="text-blue-400 w-[2.125rem] h-[2.125rem]" />
        </Link>
      </div>
    </div>
  );
}
