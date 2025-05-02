import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilters from '../components/products/ProductFilters';
import SearchBar from '../components/products/SearchBar';
import ErrorMessage from '../components/ui/ErrorMessage';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category') || undefined;
  const query = searchParams.get('q') || '';
  const sort = searchParams.get('sort') || 'featured';
  
  const { products, loading, error } = useProducts({ category });

  const filteredAndSortedProducts = useMemo(() => {
    // First filter by search query if present
    let result = [...products];
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      result = result.filter(
        product => 
          product.title.toLowerCase().includes(lowerQuery) || 
          product.description.toLowerCase().includes(lowerQuery) ||
          product.category.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Then sort according to selected option
    if (sort === 'price-low-high') {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high-low') {
      result.sort((a, b) => b.price - a.price);
    } else if (sort === 'name-a-z') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === 'name-z-a') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    } else {
      // 'featured' or default - sort by rating
      result.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    
    return result;
  }, [products, query, sort]);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <SearchBar />
      <ProductFilters />
      
      {error && <ErrorMessage message={error} />}
      
      {query && !loading && (
        <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredAndSortedProducts.length} results for "{query}"
        </p>
      )}
      
      <ProductGrid products={filteredAndSortedProducts} loading={loading} />
    </div>
  );
};

export default ProductsPage;