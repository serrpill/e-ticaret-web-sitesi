import { Product } from '../types';

const mockProducts: Record<string, Product[]> = {
  'kamp-ekipmanlari': [
    {
      id: '1',
      name: 'Coleman Çadır 4 Kişilik',
      description: 'Geniş ve dayanıklı 4 kişilik çadır.',
      price: 2499.99,
      categoryId: 'kamp-ekipmanlari',
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      brand: 'Coleman',
      rating: 4.5,
      subcategory: 'Çadır',
      stock: 10
    },
    {
      id: '2',
      name: 'Quechua Uyku Tulumu',
      description: 'Soğuk havalar için ideal uyku tulumu.',
      price: 899.99,
      categoryId: 'kamp-ekipmanlari',
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      brand: 'Quechua',
      rating: 4.2,
      subcategory: 'Uyku Tulumu',
      stock: 15
    },
    {
      id: '3',
      name: 'Naturehike Mat',
      description: 'Hafif ve konforlu şişme mat.',
      price: 299.99,
      categoryId: 'kamp-ekipmanlari',
      imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500',
      brand: 'Naturehike',
      rating: 4.0,
      subcategory: 'Mat',
      stock: 20
    }
  ],
  'outdoor-giyim': [
    {
      id: '4',
      name: 'The North Face Mont',
      description: 'Su geçirmez ve nefes alabilen dış giyim montu.',
      price: 3499.99,
      categoryId: 'outdoor-giyim',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'The North Face',
      rating: 4.8,
      subcategory: 'Mont',
      stock: 8
    },
    {
      id: '5',
      name: 'Columbia Polar',
      description: 'Sıcak tutan ve hafif polar üst.',
      price: 1299.99,
      categoryId: 'outdoor-giyim',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Columbia',
      rating: 4.3,
      subcategory: 'Polar',
      stock: 12
    }
  ],
  'ayakkabi-bot': [
    {
      id: '6',
      name: 'Salomon Trekking Botu',
      description: 'Zorlu arazi koşulları için uygun trekking botu.',
      price: 1899.99,
      categoryId: 'ayakkabi-bot',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      brand: 'Salomon',
      rating: 4.7,
      subcategory: 'Trekking Botu',
      stock: 7
    },
    {
      id: '7',
      name: 'Merrell Sandalet',
      description: 'Yaz aylarında konforlu ve dayanıklı sandalet.',
      price: 799.99,
      categoryId: 'ayakkabi-bot',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      brand: 'Merrell',
      rating: 4.4,
      subcategory: 'Sandalet',
      stock: 18
    },
    {
      id: '8',
      name: 'La Sportiva Kışlık Bot',
      description: 'Su geçirmez ve sıcak tutan kışlık bot.',
      price: 2799.99,
      categoryId: 'ayakkabi-bot',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      brand: 'La Sportiva',
      rating: 4.6,
      subcategory: 'Kışlık Botlar',
      stock: 5
    }
  ],
  'outdoor-canta': [
    {
      id: '9',
      name: 'Osprey Sırt Çantası 65L',
      description: 'Uzun yürüyüşler için geniş hacimli sırt çantası.',
      price: 3499.99,
      categoryId: 'outdoor-canta',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      brand: 'Osprey',
      rating: 4.9,
      subcategory: 'Sırt Çantası',
      stock: 6
    },
    {
      id: '10',
      name: 'Deuter Bel Çantası',
      description: 'Günlük kullanım ve kısa geziler için ideal bel çantası.',
      price: 599.99,
      categoryId: 'outdoor-canta',
      imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
      brand: 'Deuter',
      rating: 4.3,
      subcategory: 'Bel Çantası',
      stock: 25
    }
  ],
  'caki-bicak': [
    {
      id: '11',
      name: 'Victorinox Çakı',
      description: 'Çok fonksiyonlu İsviçre çakısı.',
      price: 899.99,
      categoryId: 'caki-bicak',
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      brand: 'Victorinox',
      rating: 4.8,
      subcategory: 'Çakı',
      stock: 30
    },
    {
      id: '12',
      name: 'Leatherman Alet',
      description: 'Dayanıklı ve kullanışlı çok amaçlı alet.',
      price: 1499.99,
      categoryId: 'caki-bicak',
      imageUrl: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      brand: 'Leatherman',
      rating: 4.7,
      subcategory: 'Alet',
      stock: 10
    }
  ],
  'dagcilik': [
    {
      id: '13',
      name: 'Petzl Kask',
      description: 'Dağcılık ve tırmanış için hafif kask.',
      price: 799.99,
      categoryId: 'dagcilik',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Petzl',
      rating: 4.6,
      subcategory: 'Kask',
      stock: 10
    },
    {
      id: '14',
      name: 'Black Diamond Emniyet Kemeri',
      description: 'Güvenli ve ayarlanabilir emniyet kemeri.',
      price: 1299.99,
      categoryId: 'dagcilik',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Black Diamond',
      rating: 4.5,
      subcategory: 'Emniyet Kemeri',
      stock: 10
    }
  ],
  'yoga': [
    {
      id: '15',
      name: 'Manduka Yoga Mat',
      description: 'Yüksek kaliteli, kaymaz yoga matı.',
      price: 599.99,
      categoryId: 'yoga',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Manduka',
      rating: 4.8,
      subcategory: 'Mat',
      stock: 10
    },
    {
      id: '16',
      name: 'Liforme Yoga Blok',
      description: 'Yoga pozlarında destek sağlayan blok.',
      price: 199.99,
      categoryId: 'yoga',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Liforme',
      rating: 4.4,
      subcategory: 'Blok',
      stock: 10
    }
  ],
  'termoslar': [
    {
      id: '17',
      name: 'Stanley Termos 1L',
      description: 'İçecekleri uzun süre sıcak/soğuk tutan termos.',
      price: 799.99,
      categoryId: 'termoslar',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Stanley',
      rating: 4.7,
      subcategory: 'Stanley',
      stock: 10
    },
    {
      id: '18',
      name: 'Hydro Flask 750ml',
      description: 'Modern tasarımlı, yalıtımlı su şişesi.',
      price: 899.99,
      categoryId: 'termoslar',
      imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500',
      brand: 'Hydro Flask',
      rating: 4.6,
      subcategory: 'Hydro Flask',
      stock: 10
    }
  ]
};

export default mockProducts; 