import { products } from '../../mockData';
import i18next from 'i18next';

export const ProductList = () => (
  <div>
    <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{i18next.t('products.title')}</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{product.name}</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold mb-2">${product.price}</span>
          <button className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">{i18next.t('products.addToCart')}</button>
        </div>
      ))}
    </div>
  </div>
); 