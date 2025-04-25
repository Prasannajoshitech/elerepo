import DisplayPdf from "@/app/act/[slug]/partials/PdfViewer";
import React from "react";
import Header from "./partials/Header";
import ErrorMessage from "@/components/ErrorMessage";
import { getData } from "@/api/axios";
import { endpoints } from "@/api/endpoints";

interface ActDetailSlug {
  params: Promise<{ slug: string }>;
}

const ActDetail = async ({ params }: ActDetailSlug) => {
  try {
    const { slug } = await params;

    const actDetail = await getData(endpoints.actDetail + `/${slug}`);

    return (
      <div>
        <Header actDetailData={actDetail?.data} />

        <DisplayPdf actDetailData={actDetail?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage />;
  }
};

export default ActDetail;
