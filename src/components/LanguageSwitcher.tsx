"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState<"eng" | "nep">("eng");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const baseStyle = "cursor-pointer pb-1 z-20";
  const activeStyle = "border-b-2 border-white";
  const inactiveStyle = "border-b-2 border-transparent";
  const resetGoogleTranslate = () => {
    // Remove translation-related cookies
    document.cookie = "googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "googtrans=;path=/;domain=" +
      window.location.hostname +
      ";expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // Reload page to apply reset
    window.location.reload();
  };

  const handleLanguageChange = (lang: "eng" | "nep") => {
    if (lang === "eng") {
      resetGoogleTranslate();
      return;
    }
    setActiveLang(lang);
    // Trigger Google Translate language change
    if (window.google && window.google.translate) {
      const langCode = lang === "nep" ? "ne" : "en";
      const select =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      }
    }
  };

  return (
    <div>
      {/* Desktop view */}
      <div className="pl-3 typography-p-regular font-semibold text-white hidden md:flex gap-2">
        <span
          onClick={() => handleLanguageChange("nep")}
          className={`notranslate ${baseStyle} ${
            activeLang === "nep" ? activeStyle : inactiveStyle
          }`}
        >
          Nep
        </span>
        <span className="px-1 notranslate">|</span>
        <span
          onClick={() => handleLanguageChange("eng")}
          className={`notranslate ${baseStyle} ${
            activeLang === "eng" ? activeStyle : inactiveStyle
          }`}
        >
          Eng
        </span>
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative pl-3 text-white font-semibold">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-1 notranslate"
        >
          {activeLang === "nep" ? "Nep" : "Eng"}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {dropdownOpen && (
          <div className="absolute mt-2 bg-white text-text-500 rounded shadow-md w-20 z-50">
            <div
              onClick={() => {
                handleLanguageChange("nep");
                setDropdownOpen(false);
              }}
              className="notranslate px-3 py-2 hover:bg-black-100 cursor-pointer"
            >
              Nep
            </div>
            <div
              onClick={() => {
                handleLanguageChange("eng");
                setDropdownOpen(false);
              }}
              className="notranslate px-3 py-2 hover:bg-black-100 cursor-pointer"
            >
              Eng
            </div>

            <div
              onClick={() => {
                handleLanguageChange("eng");
                setDropdownOpen(false);
              }}
              className="px-3 py-2 hover:bg-blue-100 cursor-pointer"
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
