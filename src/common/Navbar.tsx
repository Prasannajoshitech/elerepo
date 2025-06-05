import DesktopNavbar from "@/components/DesktopNavbar";
import ErrorMessage from "@/components/ErrorMessage";
import MobileNavbar from "@/components/MobileNavbar";
import { navLinks } from "@/data/navLinks";
import { getDynamicNavLinksData, getSOACategory } from "@/hooks/globalHook";
import {
  INavLinksCategory,
  INavLinksSubcategory,
} from "@/Interface/navlinks.interface";
import { ISAOResult } from "@/Interface/soa.interface";

const Navbar = async () => {
  try {
    const [dynamicNavLinkData, soaCategoryData] = await Promise.all([
      getDynamicNavLinksData(),
      getSOACategory(),
    ]);

    const dynamicLinks: INavLinksCategory[] = dynamicNavLinkData?.data;

    // Inject dynamic dropdown into the "Status of Application" menu
    const updatedNavLinks = navLinks.map((item) => {
      if (item.name === "Status of Application") {
        return {
          ...item,
          dropdown:
            soaCategoryData?.data?.records.map((result: ISAOResult) => ({
              name: result.title,
              url: `/${result.slug}`,
            })) || [],
        };
      }
      return item;
    });

    const staticLinks: INavLinksCategory[] = updatedNavLinks.map(
      (data, index) => ({
        id: index.toString(),
        name: data.name,
        main_ctg_slug: data.url,
        ordering: index,
        subcategories:
          data?.dropdown?.map((item: INavLinksSubcategory, idx: string) => ({
            id: idx.toString(),
            name: item.name,
            sub_ctg_slug: item.url,
            ordering: idx,
          })) || [],
      })
    );

    const mergedData = [...dynamicLinks, ...staticLinks];

    return (
      <nav className="bg-background-100">
        <MobileNavbar mobileData={mergedData} />
        <DesktopNavbar desktopData={mergedData} />
      </nav>
    );
  } catch (error) {
    console.error("Error fetching navigation links:", error);
    return <ErrorMessage errorMessage="navigation links" />;
  }
};

export default Navbar;
