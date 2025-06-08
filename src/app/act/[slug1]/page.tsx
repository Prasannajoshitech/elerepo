import ErrorMessage from "@/components/ErrorMessage";
import React from "react";
import { getActRuleData } from "../hooks/act.hook";
import DocumentPage from "../interface/DocumentPage";
import { getData } from "@/api/fetch";
import { endpoints } from "@/api/endpoints";

interface ActSlug {
  params: Promise<{ slug1: string }>;
}

const ActPage = async ({ params }: ActSlug) => {
  try {
    const { slug1 } = await params;

    const documentData = await getActRuleData();
    console.log(slug1, "slugggg");

    const subcategoryData = await getData(
      `${endpoints.categoryDetail}/${slug1}/`
    );
    // console.log(subcategoryData, "fdsjklfldsjlfldsjj");
    console.log(endpoints.categoryDetail, "subcategoryyy");

    return (
      <div>
        <DocumentPage
          documentData={documentData?.actRuleData?.data}
          slug1={slug1}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching Act data:", error);
    return <ErrorMessage errorMessage="Act data" />;
  }
};

export default ActPage;
