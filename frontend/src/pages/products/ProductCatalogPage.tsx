import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';
import { RootState, AppDispatch } from '../../store/store';
import ProductCard from '../../components/products/ProductCard';
import ProductFilters from '../../components/products/ProductFilters';

interface Filters {
  search: string;
  category: string;
  brand: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  page: number;
  limit: number;
}

const ProductCatalogPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error, total, pages, currentPage } = useSelector(
    (state: RootState) => state.products
  );

  const [filters, setFilters] = useState<Filters>({
    search: '',
    category: '',
    brand: '',
    minPrice: undefined,
    maxPrice: undefined,
    sortBy: 'createdAt',
    sortOrder: 'desc',
    page: 1,
    limit: 12,
  });

  // Mock data for categories and brands (replace with actual API calls)
  const categories = [
    { id: '1', name: 'Engine Parts' },
    { id: '2', name: 'Brake System' },
    { id: '3', name: 'Suspension' },
    { id: '4', name: 'Electrical' },
  ];

  const brands = [
    { id: '1', name: 'Bosch' },
    { id: '2', name: 'NGK' },
    { id: '3', name: 'Denso' },
    { id: '4', name: 'ACDelco' },
  ];

  useEffect(() => {
    dispatch(fetchProducts(filters));
  }, [dispatch, filters]);

  const handlePageChange = (page: number) => {
    setFilters((prev: Filters) => ({ ...prev, page }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Filters</h2>
            <ProductFilters
              categories={categories}
              brands={brands}
              currentFilters={filters}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">
              Products ({total})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {pages > 1 && (
            <div className="mt-8 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                {Array.from({ length: pages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === page
                        ? 'z-10 bg-primary-50 border-primary-500 text-primary-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogPage; 