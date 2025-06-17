import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import { useEffect } from 'react';

export default function OrderSuccessPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { addOrder } = useOrders();

  useEffect(() => {
    // Add the order to history and clear the cart
    addOrder(items, totalPrice);
    clearCart();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Siparişiniz Alındı!
        </h2>
        <p className="text-gray-600 mb-6">
          Siparişiniz hazırlanmaya başlandı. Bizi tercih ettiğiniz için teşekkür ederiz.
        </p>
        <Link
          to="/"
          className="inline-block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
} 