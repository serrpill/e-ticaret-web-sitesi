import { useParams } from 'react-router-dom';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  brand: string;
  rating: number;
  subcategory: string;
}

const mockProducts: Record<string, Product[]> = {
  'kamp-ekipmanlari': [
    {
      id: '1',
      name: 'Coleman Çadır 4 Kişilik',
      price: 2499.99,
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      brand: 'Coleman',
      rating: 4.5,
      subcategory: 'Çadır'
    },
    {
      id: '2',
      name: 'Quechua Uyku Tulumu',
      price: 899.99,
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      brand: 'Quechua',
      rating: 4.2,
      subcategory: 'Uyku Tulumu'
    },
    {
      id: '3',
      name: 'Naturehike Mat',
      price: 299.99,
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      brand: 'Naturehike',
      rating: 4.0,
      subcategory: 'Mat'
    }
  ],
  'outdoor-giyim': [
    {
      id: '4',
      name: 'The North Face Mont',
      price: 3499.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'The North Face',
      rating: 4.8,
      subcategory: 'Mont'
    },
    {
      id: '5',
      name: 'Columbia Polar',
      price: 1299.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Columbia',
      rating: 4.3,
      subcategory: 'Polar'
    }
  ],
  'ayakkabi-bot': [
    {
      id: '6',
      name: 'Salomon Trekking Botu',
      price: 1899.99,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      brand: 'Salomon',
      rating: 4.7,
      subcategory: 'Trekking Botu'
    },
    {
      id: '7',
      name: 'Merrell Sandalet',
      price: 799.99,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      brand: 'Merrell',
      rating: 4.4,
      subcategory: 'Sandalet'
    },
    {
      id: '8',
      name: 'La Sportiva Kışlık Bot',
      price: 2799.99,
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      brand: 'La Sportiva',
      rating: 4.6,
      subcategory: 'Kışlık Botlar'
    }
  ],
  'outdoor-canta': [
    {
      id: '9',
      name: 'Osprey Sırt Çantası 65L',
      price: 3499.99,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      brand: 'Osprey',
      rating: 4.9,
      subcategory: 'Sırt Çantası'
    },
    {
      id: '10',
      name: 'Deuter Bel Çantası',
      price: 599.99,
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      brand: 'Deuter',
      rating: 4.3,
      subcategory: 'Bel Çantası'
    }
  ],
  'caki-bicak': [
    {
      id: '11',
      name: 'Victorinox Çakı',
      price: 899.99,
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      brand: 'Victorinox',
      rating: 4.8,
      subcategory: 'Çakı'
    },
    {
      id: '12',
      name: 'Leatherman Alet',
      price: 1499.99,
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      brand: 'Leatherman',
      rating: 4.7,
      subcategory: 'Alet'
    }
  ],
  'dagcilik': [
    {
      id: '13',
      name: 'Petzl Kask',
      price: 799.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Petzl',
      rating: 4.6,
      subcategory: 'Kask'
    },
    {
      id: '14',
      name: 'Black Diamond Emniyet Kemeri',
      price: 1299.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Black Diamond',
      rating: 4.5,
      subcategory: 'Emniyet Kemeri'
    }
  ],
  'yoga': [
    {
      id: '15',
      name: 'Manduka Yoga Mat',
      price: 599.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Manduka',
      rating: 4.8,
      subcategory: 'Mat'
    },
    {
      id: '16',
      name: 'Liforme Yoga Blok',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Liforme',
      rating: 4.4,
      subcategory: 'Blok'
    }
  ],
  'termoslar': [
    {
      id: '17',
      name: 'Stanley Termos 1L',
      price: 799.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Stanley',
      rating: 4.7,
      subcategory: 'Stanley'
    },
    {
      id: '18',
      name: 'Hydro Flask 750ml',
      price: 899.99,
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Hydro Flask',
      rating: 4.6,
      subcategory: 'Hydro Flask'
    }
  ]
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const allProducts = Object.values(mockProducts).flat();
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return <div className="container mx-auto p-4 text-center text-red-600">Ürün bulunamadı.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-contain rounded mb-4 bg-gray-100" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.brand}</p>
          <h3 className="text-xl font-semibold mb-2">Ürün Detayları</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Fiyat: {product.price.toLocaleString('tr-TR', {
              style: 'currency',
              currency: 'TRY',
            })}</li>
            <li>Marka: {product.brand}</li>
            <li>Alt Kategori: {product.subcategory}</li>
            <li>Değerlendirme: {product.rating} ★</li>
          </ul>
          <div className="flex items-center gap-4 mb-8">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition">
              Sepete Ekle
            </button>
            <button className="text-gray-500 hover:text-red-500 transition">
              <HeartIcon className="h-8 w-8" />
            </button>
            <button className="text-gray-500 hover:text-yellow-500 transition">
              <BookmarkIcon className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Genel Değerlendirme ve Kullanıcı Yorumları</h2>
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <p className="text-gray-700">Henüz yorum yapılmamış.</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Benzer Ürünler</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">Benzer Ürün 1</div>
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">Benzer Ürün 2</div>
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">Benzer Ürün 3</div>
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">Benzer Ürün 4</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 