import React from 'react';
import { Product } from '../../types';
import Button from './Button';
import { useCart } from '../../context/CartContext';
import { Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={() => navigate(`/products/${product.id}`)}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="relative flex h-60 items-center justify-center overflow-hidden bg-gray-100 p-4 dark:bg-gray-900">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {product.category}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-gray-600 dark:text-gray-300">
              {product.rating.rate}
            </span>
          </div>
        </div>
        
        <h3 className="mb-2 flex-1 font-medium text-gray-900 dark:text-white line-clamp-2">
          {product.title}
        </h3>
        
        <div className="mt-auto">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>
          
          <Button 
            onClick={handleAddToCart}
            fullWidth
            variant="primary"
            className="flex items-center justify-center transition-all duration-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;