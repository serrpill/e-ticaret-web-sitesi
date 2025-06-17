import { useOrders } from '../context/OrderContext';

export default function OrdersPage() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Siparişlerim</h1>
        <p className="text-gray-600">Henüz siparişiniz bulunmamaktadır.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Siparişlerim</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">Sipariş No: {order.id}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(order.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                order.status === 'preparing'
                  ? 'bg-yellow-100 text-yellow-800'
                  : order.status === 'shipped'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
              }`}>
                {order.status === 'preparing'
                  ? 'Hazırlanıyor'
                  : order.status === 'shipped'
                  ? 'Kargoda'
                  : 'Teslim Edildi'}
              </span>
            </div>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-2 border-b last:border-0"
                >
                  <div className="flex items-center space-x-4">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600">
                        {item.quantity} adet x {item.price.toFixed(2)} TL
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {(item.price * item.quantity).toFixed(2)} TL
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center">
                <span className="font-medium">Toplam Tutar:</span>
                <span className="text-lg font-bold">{order.totalPrice.toFixed(2)} TL</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 