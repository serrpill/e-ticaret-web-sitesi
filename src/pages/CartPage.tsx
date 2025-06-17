import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCompleteOrder = () => {
    navigate('/order-success');
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Sepetim</h1>
        <p className="text-gray-600">Sepetinizde ürün bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Sepetim</h1>
      <div className="grid grid-cols-1 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">{item.price.toFixed(2)} TL</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Toplam:</span>
          <span className="text-xl font-bold">{totalPrice.toFixed(2)} TL</span>
        </div>
        <button
          onClick={handleCompleteOrder}
          className="w-full mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Siparişi Tamamla
        </button>
      </div>
    </div>
  );
} 