import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';
const mockProducts = {
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
    const { productId } = useParams();
    const allProducts = Object.values(mockProducts).flat();
    const product = allProducts.find(p => p.id === productId);
    if (!product) {
        return _jsx("div", { className: "container mx-auto p-4 text-center text-red-600", children: "\u00DCr\u00FCn bulunamad\u0131." });
    }
    return (_jsxs("div", { className: "container mx-auto p-4", children: [_jsx("h1", { className: "text-3xl font-bold mb-6", children: product.name }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsx("div", { children: _jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-96 object-contain rounded mb-4 bg-gray-100" }) }), _jsxs("div", { children: [_jsx("h2", { className: "text-2xl font-bold mb-2", children: product.name }), _jsx("p", { className: "text-gray-700 mb-4", children: product.brand }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "\u00DCr\u00FCn Detaylar\u0131" }), _jsxs("ul", { className: "list-disc list-inside mb-6", children: [_jsxs("li", { children: ["Fiyat: ", product.price.toLocaleString('tr-TR', {
                                                style: 'currency',
                                                currency: 'TRY',
                                            })] }), _jsxs("li", { children: ["Marka: ", product.brand] }), _jsxs("li", { children: ["Alt Kategori: ", product.subcategory] }), _jsxs("li", { children: ["De\u011Ferlendirme: ", product.rating, " \u2605"] })] }), _jsxs("div", { className: "flex items-center gap-4 mb-8", children: [_jsx("button", { className: "bg-yellow-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition", children: "Sepete Ekle" }), _jsx("button", { className: "text-gray-500 hover:text-red-500 transition", children: _jsx(HeartIcon, { className: "h-8 w-8" }) }), _jsx("button", { className: "text-gray-500 hover:text-yellow-500 transition", children: _jsx(BookmarkIcon, { className: "h-8 w-8" }) })] })] })] }), _jsxs("div", { className: "mt-12", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Genel De\u011Ferlendirme ve Kullan\u0131c\u0131 Yorumlar\u0131" }), _jsx("div", { className: "bg-white p-6 rounded shadow-md mb-6", children: _jsx("p", { className: "text-gray-700", children: "Hen\u00FCz yorum yap\u0131lmam\u0131\u015F." }) })] }), _jsxs("div", { className: "mt-12", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Benzer \u00DCr\u00FCnler" }), _jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [_jsx("div", { className: "bg-gray-200 h-48 flex items-center justify-center text-gray-500", children: "Benzer \u00DCr\u00FCn 1" }), _jsx("div", { className: "bg-gray-200 h-48 flex items-center justify-center text-gray-500", children: "Benzer \u00DCr\u00FCn 2" }), _jsx("div", { className: "bg-gray-200 h-48 flex items-center justify-center text-gray-500", children: "Benzer \u00DCr\u00FCn 3" }), _jsx("div", { className: "bg-gray-200 h-48 flex items-center justify-center text-gray-500", children: "Benzer \u00DCr\u00FCn 4" })] })] })] }));
};
export default ProductDetailPage;
