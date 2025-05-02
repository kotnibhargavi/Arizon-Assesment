import { useState, useEffect } from 'react';
import { Product } from '../types';

interface UseProductsProps {
  category?: string;
  limit?: number;
}

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  featuredProducts: Product[];
}

export const useProducts = ({ category, limit }: UseProductsProps = {}): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products?limit=20');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data: Product[] = await response.json();
        let filteredData = data;
        
        if (category && category !== 'all') {
          filteredData = data.filter(product => product.category === category);
        }
        
        if (limit) {
          filteredData = filteredData.slice(0, limit);
        }
        
        setProducts(filteredData);
        
        const featured = [...filteredData]
          .sort((a, b) => b.rating.rate - a.rating.rate)
          .slice(0, 4);
        setFeaturedProducts(featured);
        
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, limit]);

  return { products, loading, error, featuredProducts };
};