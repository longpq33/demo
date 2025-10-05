import { useQuery } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import { ProductFilters, ProductListResponse } from '@/types/product';

export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: ['products', 'list', filters],
    queryFn: () => productService.getProducts(filters),
    select: (data) => data,
    staleTime: 2 * 60 * 1000, // 2 minutes
    gcTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useProducts;
