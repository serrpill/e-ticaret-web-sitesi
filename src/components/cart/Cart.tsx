import { useAtom } from 'jotai';
import { cartAtom } from '../../store';
import i18next from 'i18next';

export const Cart = () => {
  const [cart] = useAtom(cartAtom);
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">{i18next.t('cart.title')}</h1>
      {cart.items.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">{i18next.t('cart.empty')}</p>
      ) : (
        <div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 mb-6">
            {cart.items.map(item => (
              <li key={item.productId} className="py-4 flex items-center">
                <img src={item.product.imageUrl} alt={item.product.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.product.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300">{i18next.t('cart.quantity')}: {item.quantity}</p>
                </div>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">${item.product.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{i18next.t('cart.total')}</span>
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">${cart.total}</span>
          </div>
        </div>
      )}
    </div>
  );
}; 