"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const DesktopNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="hidden md:flex justify-between items-center py-3 px-10">
      <div className="flex flex-wrap gap-[2.4rem] items-center">
        {navLinks.map((navItem) => {
          const isActive = activeDropdown === navItem.name;

          return (
            <div
              key={navItem.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(navItem.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown(navItem.name)}
                className="group relative cursor-pointer typography-p-regular font-medium text-text-500 hover:text-blue-500 transition-colors duration-300"
              >
                <Link href={navItem?.url} className="flex items-center gap-1">
                  {navItem.name}
                  {navItem?.dropdown && (
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </Link>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                    isActive ? "w-full" : ""
                  }`}
                ></div>
              </button>

              <div
                className={`absolute left-0 top-full mt-3.5 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${
                  isActive ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                {navItem?.dropdown?.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.url}
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-[0.62rem] text-sm text-text-500 hover:bg-blue-400 hover:text-white"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <button className="text-white uppercase font-semibold typography-p-regular bg-blue-500 px-4 py-2 rounded-[0.5rem] cursor-pointer">
          dms
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
