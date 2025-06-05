import ErrorMessage from "@/components/ErrorMessage";
import { getActRuleData } from "./hooks/act.hook";
import DocumentPage from "./partials/DocumentPage";

const ActPage = async () => {
  try {
    const documentData = await getActRuleData();

    return (
      <div>
        <DocumentPage documentData={documentData?.actRuleData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage errorMessage="home data" />;
  }
};

export default ActPage;
