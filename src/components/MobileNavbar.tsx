"use client";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import React, { useState } from "react";

const MobileNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="md:hidden px-6 py-3">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-text-500 ml-auto"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4">
          {navLinks.map((navItem) => (
            <div key={navItem.name} className="flex flex-col">
              <button
                onClick={() => toggleDropdown(navItem.name)}
                className="flex items-center justify-between text-text-500 font-medium"
              >
                {navItem.name}
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform duration-300 ${
                    activeDropdown === navItem.name ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === navItem.name && (
                <div className="mt-2 ml-4 flex flex-col gap-2">
                  {navItem.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.url}
                      className="text-sm text-text-500 hover:text-blue-500"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="mt-4 text-white uppercase font-semibold bg-blue-500 px-4 py-2 rounded-[0.5rem]">
            dms
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
