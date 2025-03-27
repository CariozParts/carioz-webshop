import React from 'react';

export interface ProductFiltersProps {
  categories: Array<{ id: string; name: string }>;
  brands: Array<{ id: string; name: string }>;
  currentFilters: {
    search: string;
    category: string;
    brand: string;
    minPrice: number;
    maxPrice: number;
    sortBy: string;
    sortOrder: 'asc' | 'desc';
    page: number;
  };
  onFilterChange: (filters: Partial<ProductFiltersProps['currentFilters']>) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  categories,
  brands,
  currentFilters,
  onFilterChange,
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'minPrice' | 'maxPrice'
  ) => {
    const value = e.target.value ? Number(e.target.value) : 0;
    onFilterChange({ [type]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      
      {/* Search */}
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          Search
        </label>
        <input
          type="text"
          id="search"
          name="search"
          value={currentFilters.search}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
          placeholder="Search products..."
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          value={currentFilters.category}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Brand */}
      <div className="mb-4">
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
          Brand
        </label>
        <select
          id="brand"
          name="brand"
          value={currentFilters.brand}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        >
          <option value="">All Brands</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            name="minPrice"
            value={currentFilters.minPrice}
            onChange={(e) => handlePriceChange(e, 'minPrice')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Min"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            name="maxPrice"
            value={currentFilters.maxPrice}
            onChange={(e) => handlePriceChange(e, 'maxPrice')}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-4">
        <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700">
          Sort By
        </label>
        <select
          id="sortBy"
          name="sortBy"
          value={currentFilters.sortBy}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="createdAt">Date Added</option>
        </select>
      </div>

      {/* Sort Order */}
      <div className="mb-4">
        <label htmlFor="sortOrder" className="block text-sm font-medium text-gray-700">
          Sort Order
        </label>
        <select
          id="sortOrder"
          name="sortOrder"
          value={currentFilters.sortOrder}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters; 