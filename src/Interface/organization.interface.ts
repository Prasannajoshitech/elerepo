export interface IOrganizationSettingRoot {
  status: string;
  status_code: number;
  message: string;
  data: IOrganizationSettingDaum[];
}

export interface IOrganizationSettingDaum {
  id: string;
  favicon: string;
  gov_logo: string;
  erc_logo: string;
  org_name_eng: string;
  org_name_nepali: string;
  office_address: string;
  email: string;
  phone: string;
  fax: string;
  google_map: string;
  disclaimer: string;
  domain: string;
  office_hours: string;
  social_media: string[];
  terms_condition: string;
  privacy_policy: string;
}
