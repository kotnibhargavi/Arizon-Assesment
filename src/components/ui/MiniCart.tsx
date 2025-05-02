import React, { useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';
import Button from './Button';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const MiniCart: React.FC = () => {
  const { cart, isCartOpen, closeCart } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        closeCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, closeCart]);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const handleViewCart = () => {
    navigate('/cart');
    closeCart();
  };

  if (!isCartOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
        ref={cartRef}
      >
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4">
          <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white">Your Cart</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8">
              <ShoppingBag className="mb-2 h-12 w-12 text-gray-300 dark:text-gray-600" />
              <p className="mb-4 text-gray-500 dark:text-gray-400">Your cart is empty</p>
              <Button variant="primary" onClick={() => {
                navigate('/products');
                closeCart();
              }}>
                Shop Now
              </Button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div
                      key={item.product.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <CartItem item={item} showControls={false} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-medium text-gray-900 dark:text-white">Subtotal</span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    ${calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" fullWidth onClick={handleViewCart}>
                    View Cart
                  </Button>
                  <Button variant="primary" fullWidth onClick={() => {
                    navigate('/cart');
                    closeCart();
                  }}>
                    Checkout
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MiniCart;