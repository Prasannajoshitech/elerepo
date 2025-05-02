export interface ISoaDetailRoot {
  status: string;
  status_code: number;
  message: string;
  data: ISoaDetailData;
}

export interface ISoaDetailData {
  id: string;
  slug: string;
  title: string;
  description: string;
  details: ISoaDetailDetail[];
}

export interface ISoaDetailDetail {
  id: string;
  created_at: string;
  updated_at: string;
  company_name: string;
  address: string;
  conduct_of_application: string;
  date_of_application: string;
  date_of_commision_decision: string;
  status: string;
  remarks: string;
  application_status: string;
}
