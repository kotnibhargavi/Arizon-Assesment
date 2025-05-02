import React from 'react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
  showControls?: boolean;
}

const CartItem: React.FC<CartItemProps> = ({ item, showControls = true }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    updateQuantity(product.id, quantity - 1);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-200 dark:border-gray-700 last:border-0">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain object-center p-1"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white line-clamp-1">
          {product.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          ${product.price.toFixed(2)} x {quantity}
        </p>
        <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
          ${(product.price * quantity).toFixed(2)}
        </p>
      </div>
      
      {showControls && (
        <div className="flex items-center">
          <div className="flex items-center border border-gray-300 rounded dark:border-gray-600">
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              onClick={handleDecreaseQuantity}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <button
              type="button"
              className="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
              onClick={handleIncreaseQuantity}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            className="ml-2 p-1 text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
            onClick={handleRemove}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}

      {!showControls && (
        <button
          type="button"
          className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400"
          onClick={handleRemove}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default CartItem;