export interface IDocument {
  records: IDocumentRecord[];
  totalRecords: number;
  perPage: number;
  totalPages: number;
  currentPage: number;
  pagingCounter: number;
  hasPrevious: boolean;
  hasNext: boolean;
  prev: string;
  next: string;
  recordShown: number;
}

export interface IDocumentRecord {
  id: string;
  document_list: IDocumentList[];
  created_at: string;
  updated_at: string;
  ordering: number;
  name_en: string;
  name_np: string;
  sub_ctg_slug: string;
  main_category: string;
}

export interface IDocumentList {
  id: string;
  title: string;
  description: string;
  slug: string;
  file: string;
  image: string;
  main_category: string;
  sub_category: string;
  created_at: string;
}
