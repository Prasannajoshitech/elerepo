"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
  const [locale, setLocale] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const cookieLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("MYNEXTAPP_LOCALEMANISH="))
      ?.split("=")[1];

    if (cookieLocale) {
      setLocale(cookieLocale);
    } else {
      const browserLocale = navigator.language.slice(0, 2);
      setLocale(browserLocale);
      document.cookie = `MYNEXTAPP_LOCALEMANISH=${browserLocale}`;
      router.refresh();
    }
  }, [router]);

  const handleLanguageChange = (lang: "en" | "ne") => {
    setLocale(lang);
    document.cookie = `MYNEXTAPP_LOCALEMANISH=${lang}`;
    router.refresh();
    setDropdownOpen(false);
  };

  const baseStyle = "cursor-pointer pb-1 z-20";
  const activeStyle = "border-b-2 border-white";
  const inactiveStyle = "border-b-2 border-transparent";

  return (
    <div>
      {/* Desktop View */}
      <div className="pl-3 typography-p-regular font-semibold text-white hidden md:flex gap-2">
        <span
          onClick={() => handleLanguageChange("ne")}
          className={`${baseStyle} ${
            locale === "ne" ? activeStyle : inactiveStyle
          }`}
        >
          Nep
        </span>
        <span className="px-1">|</span>
        <span
          onClick={() => handleLanguageChange("en")}
          className={`${baseStyle} ${
            locale === "en" ? activeStyle : inactiveStyle
          }`}
        >
          Eng
        </span>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative pl-3 text-white font-semibold">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1"
        >
          {locale === "ne" ? "Nep" : "Eng"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 bg-white text-black rounded shadow-md w-20 z-50">
            <div
              onClick={() => handleLanguageChange("ne")}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Nep
            </div>
            <div
              onClick={() => handleLanguageChange("en")}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              Eng
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
