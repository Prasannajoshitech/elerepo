import React from "react";
import { IActDetailData } from "../interface/actDetail.interface";
import DisplayPdf from "@/components/PdfViewer";

interface Props {
  actDetailData: IActDetailData;
}

const PdfDetail: React.FC<Props> = ({ actDetailData }) => {
  return (
    <div>
      <DisplayPdf actDetailData={actDetailData} />
    </div>
  );
};

export default PdfDetail;
