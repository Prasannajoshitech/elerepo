import { endpoints } from "@/api/endpoints";
import DocumentCard from "@/app/act/partials/DocumentCard";
import { safeFetch } from "@/helper/safeFetch";
import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}
const page: React.FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const { data } = await safeFetch(endpoints.serviceDetail + `${slug}`);
  return (
    <div>
      <DocumentCard file="" />
    </div>
  );
};

export default page;
