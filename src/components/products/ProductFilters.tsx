import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import Button from '../ui/Button';

const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'jewelery', name: 'Jewelry' },
  { id: "men's clothing", name: "Men's Clothing" },
  { id: "women's clothing", name: "Women's Clothing" },
];

const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-low-high', name: 'Price: Low to High' },
  { id: 'price-high-low', name: 'Price: High to Low' },
  { id: 'name-a-z', name: 'Name: A to Z' },
  { id: 'name-z-a', name: 'Name: Z to A' },
];

const ProductFilters: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const handleSortChange = (sortId: string) => {
    searchParams.set('sort', sortId);
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const toggleFilters = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  // Close filters on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsFiltersOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>
        
        <div className="flex items-center gap-2">
          {/* Mobile Filter Button */}
          <button
            className="flex items-center gap-1 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:hidden dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            onClick={toggleFilters}
          >
            <Filter className="h-4 w-4" />
            Filters
          </button>
          
          {/* Clear All Filters Button (shown when filters are applied) */}
          {(currentCategory !== 'all' || currentSort !== 'featured') && (
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              onClick={clearFilters}
            >
              <X className="h-4 w-4" />
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Filter Section */}
      <div className={`
        mt-4 space-y-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800
        md:flex md:space-y-0 md:space-x-6 md:p-6
        ${isFiltersOpen ? 'block' : 'hidden md:flex'}
      `}>
        {/* Categories */}
        <div className="md:w-2/3">
          <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={currentCategory === category.id ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Sort */}
        <div className="md:w-1/3">
          <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Sort By</h3>
          <select
            value={currentSort}
            onChange={(e) => handleSortChange(e.target.value)}
            className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;