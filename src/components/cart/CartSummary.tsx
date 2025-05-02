import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import CheckoutModal from '../checkout/CheckOutModal';

const CartSummary: React.FC = () => {
  const { cart } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Order Summary</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
            <span className="font-medium text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-400">Shipping</span>
            <span className="font-medium text-gray-900 dark:text-white">${shipping.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between pt-3">
            <span className="text-base font-medium text-gray-900 dark:text-white">Total</span>
            <span className="text-base font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Button 
            variant="primary" 
            fullWidth
            disabled={cart.length === 0}
            onClick={() => setIsCheckoutModalOpen(true)}
          >
            Proceed to Checkout
          </Button>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          <p>Cash on Delivery Only</p>
        </div>
      </div>

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        total={total}
      />
    </>
  );
};

export default CartSummary;