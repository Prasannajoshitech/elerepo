"use client";
import DesktopNavbar from "@/components/DesktopNavbar";
import MobileNavbar from "@/components/MobileNavbar";

const Navbar = () => {
  return (
    <nav className="bg-background-100">
      <MobileNavbar />
      <DesktopNavbar />
    </nav>
  );
};

export default Navbar;
