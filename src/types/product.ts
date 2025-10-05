export interface ProductTag {
  id: number;
  name: string;
  slug: string;
}

export interface ProductMeta {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface ProductDates {
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  category_id: number;
  tags: ProductTag[];
  meta: ProductMeta;
  dates: ProductDates;
  locale: string;
}

export interface ProductFilters {
  page?: number;
  per_page?: number;
  search?: string;
  category_id?: number;
  is_featured?: boolean;
  is_active?: boolean;
  locale?: string;
}

export interface ProductListLinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

export interface ProductListMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: Array<{
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
  }>;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface ProductListResponse {
  data: Product[];
  links: ProductListLinks;
  meta: ProductListMeta;
  locale: string;
  search: string | null;
}
