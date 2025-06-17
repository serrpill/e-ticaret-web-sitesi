import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { cartApi } from '../api/cart';
import { Cart, CartItem } from '../models/Cart';

const CartPage = () => {
  const [cart, setCart] = useState<Cart | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      setLoading(true);
      const response = await cartApi.getCart();
      if (response.success && response.data) {
        setCart(response.data);
      } else {
        setError(response.error || 'Sepet yüklenemedi');
      }
    } catch (err) {
      setError('Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleQuantityChange = async (item: CartItem, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    try {
      const response = await cartApi.updateCartItem(item.productId, newQuantity);
      if (response.success && response.data) {
        setCart(response.data);
      }
    } catch (err) {
      setError('Miktar güncellenemedi');
    }
  };

  const handleRemoveItem = async (productId: string) => {
    try {
      const response = await cartApi.removeFromCart(productId);
      if (response.success && response.data) {
        setCart(response.data);
      }
    } catch (err) {
      setError('Ürün sepetten çıkarılamadı');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <GiShoppingCart className="mx-auto text-6xl text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Sepetiniz Boş</h2>
          <p className="text-gray-600 mb-8">Sepetinizde henüz ürün bulunmuyor.</p>
          <Link
            to="/"
            className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
          >
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Sepetim</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.items.map((item) => (
            <div key={item.productId} className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow">
              <img
                src={item.product.imageUrl}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-bold">{item.product.name}</h3>
                <p className="text-gray-600">{item.product.brand}</p>
                <p className="text-yellow-500 font-bold mt-2">
                  {item.product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemoveItem(item.productId)}
                className="text-red-500 hover:text-red-700"
              >
                Kaldır
              </button>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Sipariş Özeti</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Ara Toplam</span>
                <span>{cart.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
              </div>
              <div className="flex justify-between">
                <span>Kargo</span>
                <span>Ücretsiz</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Toplam</span>
                  <span>{cart.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
              Ödemeye Geç
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 