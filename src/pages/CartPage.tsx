import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/ui/CartItem';
import CartSummary from '../components/cart/CartSummary';
import Button from '../components/ui/Button';
import { ShoppingCart, ArrowLeft } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
          <ShoppingCart className="mx-auto mb-4 h-16 w-16 text-gray-400 dark:text-gray-500" />
          <h2 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Your cart is empty</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link to="/products">
            <Button variant="primary">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  Cart Items ({cart.reduce((total, item) => total + item.quantity, 0)})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-800 dark:text-red-500 dark:hover:text-red-400"
                >
                  Clear Cart
                </button>
              </div>
              
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {cart.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              <div className="mt-6 flex items-center">
                <Link to="/products" className="flex items-center text-teal-600 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <CartSummary />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;