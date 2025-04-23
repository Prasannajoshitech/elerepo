export interface IDocumentRoot {
  status: string;
  status_code: number;
  message: string;
  data: IDocumentDaum[];
}

export interface IDocumentDaum {
  id: string;
  main_category: string;
  sub_category: string;
  title: string;
  description: string;
  slug: string;
  file: string;
  image: string;
  created_at: string;
}
