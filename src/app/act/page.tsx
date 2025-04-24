import React from "react";
import DocumentPage from "./partials/DocumentPage";
import { getHomePageData } from "../(home)/hooks/home.hook";
import ErrorMessage from "@/components/ErrorMessage";

const ActPage = async () => {
  try {
    const { documentData } = await getHomePageData();
    return (
      <div>
        <DocumentPage documentData={documentData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage />;
  }
};

export default ActPage;
