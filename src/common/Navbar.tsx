"use client";

import { navLinks } from "@/data/navLinks";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  return (
    <header className="bg-background-100 text-text-500">
      <div className="flex justify-between items-center py-4 px-4 sm:px-10">
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((item, index) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className={`flex items-center gap-1 font-medium text-base ${
                      pathname === item.url ? "text-blue-500 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        dropdownOpen === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dropdownOpen === index && (
                    <div className="absolute top-8 left-0 w-48 bg-white text-black shadow-md rounded-md py-2 z-50">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.url}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.url}
                  className={`font-medium text-base hover:text-blue-500 ${
                    pathname === item.url ? "text-blue-500 font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 text-blue-600 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed mt-60 top-0 right-0 h-screen w-full bg-white text-text-500 shadow-lg transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col pt-16 px-4 gap-4`}
      >
        {navLinks.map((item, index) => (
          <div key={item.name}>
            {item.dropdown ? (
              <>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex items-center justify-between text-lg font-medium"
                >
                  {item.name}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      dropdownOpen === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownOpen === index && (
                  <div className="ml-2 mt-1 space-y-1">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.url}
                        className="block px-4 py-2 hover:bg-blue-100 rounded-md"
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.url}
                className={`block text-lg font-medium py-2 ${
                  pathname === item.url ? "text-blue-500 font-semibold" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
