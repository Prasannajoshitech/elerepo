import DesktopNavbar from "@/components/DesktopNavbar";
import ErrorMessage from "@/components/ErrorMessage";
import MobileNavbar from "@/components/MobileNavbar";
import { getNavLinksData } from "@/hooks/globalHook";
import { INavLinksDaum } from "@/Interface/navlinks.interface";

const Navbar = async () => {
  try {
    // global custom hook
    const navLinkData = await getNavLinksData();

    const data: INavLinksDaum[] = navLinkData?.data;

    return (
      <nav className="bg-background-100">
        <MobileNavbar mobileData={data} />
        <DesktopNavbar desktopData={data} />
      </nav>
    );
  } catch (error) {
    console.error("Error fetching navigation links:", error);
    return <ErrorMessage />;
  }
};

export default Navbar;
