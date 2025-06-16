import { useParams } from 'react-router-dom';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import mockProducts from '../data/allMockProducts';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const allProducts = Object.values(mockProducts).flat();
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Ürün Görseli */}
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-[500px] object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <HeartIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <BookmarkIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.brand}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">({product.rating})</span>
          </div>

          <div className="text-3xl font-bold text-gray-900">
            {product.price.toLocaleString('tr-TR', {
              style: 'currency',
              currency: 'TRY'
            })}
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Stok Durumu:</span>
              <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `${product.stock} adet` : 'Stokta yok'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">Kategori:</span>
              <span className="text-gray-600">{product.subcategory}</span>
            </div>
          </div>

          <button
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Sepete Ekle' : 'Stokta Yok'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 