import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingCart, CreditCard } from 'lucide-react';
import Button from '../components/ui/Button';
import Loader from '../components/ui/Loader';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-200px)] items-center justify-center">
        <Loader size="lg" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Error</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{error || 'Product not found'}</p>
          <Button className="mt-4" onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back to Shopping
      </button>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-square overflow-hidden rounded-lg bg-white p-8 dark:bg-gray-800"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
              {product.title}
            </h1>
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
              <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Category: {product.category}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{product.description}</p>
          </div>

          <div className="mt-auto space-y-4">
            <Button
              variant="primary"
              fullWidth
              size="lg"
              onClick={() => addToCart(product)}
              className="flex items-center justify-center"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            <Button
              variant="outline"
              fullWidth
              size="lg"
              onClick={() => {
                addToCart(product);
                navigate('/cart');
              }}
              className="flex items-center justify-center"
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Buy Now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;