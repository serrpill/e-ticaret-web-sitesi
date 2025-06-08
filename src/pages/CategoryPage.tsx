import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { GiSettingsKnobs } from 'react-icons/gi';

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

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const subcategory = searchParams.get('subcategory');
  const searchQuery = searchParams.get('q');
  
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [appliedFilters, setAppliedFilters] = useState({
    priceRange: { min: '', max: '' },
    brands: [] as string[],
    sortBy: 'popular'
  });

  // Reset filters when category, subcategory, or search query changes
  useEffect(() => {
    setPriceRange({ min: '', max: '' });
    setSelectedBrands([]);
    setSortBy('popular');
    setAppliedFilters({
      priceRange: { min: '', max: '' },
      brands: [],
      sortBy: 'popular'
    });
  }, [categoryId, subcategory, searchQuery]);

  const allProducts = Object.values(mockProducts).flat(); // Get all products from all categories

  let productsToDisplay = allProducts;

  if (searchQuery) {
    const lowerCaseQuery = searchQuery.toLowerCase();
    productsToDisplay = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerCaseQuery) ||
        p.brand.toLowerCase().includes(lowerCaseQuery) ||
        p.subcategory.toLowerCase().includes(lowerCaseQuery)
    );
  } else if (categoryId && mockProducts[categoryId]) {
    productsToDisplay = mockProducts[categoryId];
    if (subcategory) {
      productsToDisplay = productsToDisplay.filter(
        (p) => p.subcategory === subcategory
      );
    }
  }

  // Apply filters if not a search query
  let filteredAndSortedProducts = productsToDisplay;

  if (!searchQuery) {
    filteredAndSortedProducts = filteredAndSortedProducts
      .filter((p) => {
        if (appliedFilters.brands.length === 0) return true;
        return appliedFilters.brands.includes(p.brand);
      })
      .filter((p) => {
        const min = appliedFilters.priceRange.min
          ? Number(appliedFilters.priceRange.min)
          : 0;
        const max = appliedFilters.priceRange.max
          ? Number(appliedFilters.priceRange.max)
          : Infinity;
        return p.price >= min && p.price <= max;
      })
      .sort((a, b) => {
        switch (appliedFilters.sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'popular':
          default:
            return b.rating - a.rating;
        }
      });
  }

  const hasProducts = filteredAndSortedProducts.length > 0;
  const availableBrands = [
    ...new Set(productsToDisplay.map((p) => p.brand))
];

  const handleApplyFilters = () => {
    setAppliedFilters({
      priceRange,
      brands: selectedBrands,
      sortBy,
    });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setAppliedFilters((prev) => ({
      ...prev,
      sortBy: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Filter Sidebar - Only show if there are products and no search query */}
        {hasProducts && !searchQuery && (
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <GiSettingsKnobs className="text-xl" />
                <h2 className="text-lg font-bold">Filtreler</h2>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Fiyat Aralığı</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev, min: e.target.value
                      }))
                    }
                    className="w-24 px-2 py-1 border rounded"
                    placeholder="Min"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev, max: e.target.value
                      }))
                    }
                    className="w-24 px-2 py-1 border rounded"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Markalar</h3>
                <div className="space-y-2">
                  {availableBrands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                          }
                        }}
                        className="rounded"
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={handleApplyFilters}
                className="w-full bg-yellow-500 text-white py-2 rounded font-bold hover:bg-yellow-600 transition"
              >
                Uygula
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              {searchQuery
                ? `Arama Sonuçları: "${searchQuery}"`
                : subcategory
                ? `${categoryId?.replace(/-/g, ' ')} - ${subcategory}`
                : categoryId?.replace(/-/g, ' ')}
            </h1>
            {hasProducts && !searchQuery && (
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="px-3 py-2 border rounded"
              >
                <option value="popular">Popülerlik</option>
                <option value="price-asc">Fiyat (Düşükten Yükseğe)</option>
                <option value="price-desc">Fiyat (Yüksekten Düşüğe)</option>
              </select>
            )}
          </div>

          {hasProducts ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-yellow-600">
                        {product.price.toLocaleString('tr-TR', {
                          style: 'currency',
                          currency: 'TRY',
                        })}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-gray-600">
                {searchQuery ? 'Aradığınız ürün bulunamadı.' : 'Ürün Bulunamadı'}
              </h2>
              <p className="text-gray-500 mt-2">
                {searchQuery
                  ? 'Lütfen başka bir anahtar kelime ile tekrar deneyin.'
                  : 'Bu kategoride henüz ürün bulunmamaktadır.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 