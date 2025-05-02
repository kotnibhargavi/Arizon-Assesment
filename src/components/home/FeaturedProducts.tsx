import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../ui/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import Loader from '../ui/Loader';
import ErrorMessage from '../ui/ErrorMessage';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const { featuredProducts, loading, error } = useProducts({ limit: 4 });
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Products</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
            Discover our most popular items, carefully selected for quality and style.
          </p>
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <Loader size="lg" />
          </div>
        )}

        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={() => navigate('/products')}
                variant="outline"
                className="group"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;