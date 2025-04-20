"use client";

import { useState } from "react";

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState("nep");

  const baseStyle = "cursor-pointer pb-1";
  const activeStyle = "border-b-2 border-white";
  const inactiveStyle = "border-b-2 border-transparent";

  return (
    <div className="pl-[0.75rem] typography-p-regular font-semibold text-white flex gap-2">
      <span
        onClick={() => setActiveLang("nep")}
        className={`${baseStyle} ${
          activeLang === "nep" ? activeStyle : inactiveStyle
        }`}
      >
        Nep
      </span>
      <span className="px-[0.25rem]">|</span>
      <span
        onClick={() => setActiveLang("eng")}
        className={`${baseStyle} ${
          activeLang === "eng" ? activeStyle : inactiveStyle
        }`}
      >
        Eng
      </span>
    </div>
  );
};

export default LanguageSwitcher;
