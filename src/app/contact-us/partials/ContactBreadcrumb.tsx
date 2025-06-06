"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import { useTranslations } from "next-intl";

const ContactBreadcrumb = () => {
  const t = useTranslations("Breadcrumb");

  const { data, isLoading, isError } = useGetDataQuery({
    url: endpoints.breadcrumb,
    params: { title: "Contact" },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data || !data[0]) return <div>Something went wrong</div>;

  const imageUrl = data[0]?.image;

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[8rem] lg:h-[12rem] w-full relative rounded-[0.25rem] overflow-hidden flex justify-center items-center"
    >
      <div className="bg-[#003386BD]/75 absolute inset-0" />
      <span className="typography-h1-bold text-white absolute">
        {t("ContactUs")}
      </span>
    </div>
  );
};

export default ContactBreadcrumb;
