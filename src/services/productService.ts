import { http } from '@/utils/httpClient';
import { ProductFilters, ProductListResponse } from '@/types/product';

export const productService = {
  // Get all products with filters
  getProducts: async (filters?: ProductFilters): Promise<ProductListResponse> => {
    const params = new URLSearchParams();
    
    if (filters?.page) params.append('page', filters.page.toString());
    if (filters?.per_page) params.append('per_page', filters.per_page.toString());
    if (filters?.search) params.append('search', filters.search);
    if (filters?.category_id) params.append('category_id', filters.category_id.toString());
    if (filters?.is_featured !== undefined) params.append('is_featured', filters.is_featured.toString());
    if (filters?.is_active !== undefined) params.append('is_active', filters.is_active.toString());
    if (filters?.locale) params.append('locale', filters.locale);

    const queryString = params.toString();
    const url = queryString ? `/digital-products?${queryString}` : '/digital-products';
    
    const response = await http.get<ProductListResponse>(url);
    return response.data;
  },
};

export default productService;