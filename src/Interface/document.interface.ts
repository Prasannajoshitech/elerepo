export interface IActCategoryRoot {
  data: IActData;
}

export interface IActData {
  records: IActRecord[];
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

export interface IActRecord {
  id: string;
  name: string;
  ordering: number;
  sub_ctg_slug: string;
  document_list: IActDocumentList[];
}

export interface IActDocumentList {
  id: string;
  title: string;
  description: string;
  slug: string;
  file: string;
  image: string;
  main_category: string;
  sub_category: string;
  created_at: string;
  updated_at: string;
}



