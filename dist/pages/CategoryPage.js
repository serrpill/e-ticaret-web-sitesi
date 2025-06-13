import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { GiSettingsKnobs } from 'react-icons/gi';
import { Link } from 'react-router-dom';
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
const CategoryPage = () => {
    const { categoryId } = useParams();
    const [searchParams] = useSearchParams();
    const subcategory = searchParams.get('subcategory');
    const searchQuery = searchParams.get('q');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [sortBy, setSortBy] = useState('popular');
    const [appliedFilters, setAppliedFilters] = useState({
        priceRange: { min: '', max: '' },
        brands: [],
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
        productsToDisplay = allProducts.filter((p) => p.name.toLowerCase().includes(lowerCaseQuery) ||
            p.brand.toLowerCase().includes(lowerCaseQuery) ||
            p.subcategory.toLowerCase().includes(lowerCaseQuery));
    }
    else if (categoryId && mockProducts[categoryId]) {
        productsToDisplay = mockProducts[categoryId];
        if (subcategory) {
            productsToDisplay = productsToDisplay.filter((p) => p.subcategory === subcategory);
        }
    }
    // Apply filters if not a search query
    let filteredAndSortedProducts = productsToDisplay;
    if (!searchQuery) {
        filteredAndSortedProducts = filteredAndSortedProducts
            .filter((p) => {
            if (appliedFilters.brands.length === 0)
                return true;
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
    const handleSortChange = (value) => {
        setSortBy(value);
        setAppliedFilters((prev) => ({
            ...prev,
            sortBy: value,
        }));
    };
    return (_jsx("div", { className: "max-w-7xl mx-auto px-4 py-8", children: _jsxs("div", { className: "flex gap-8", children: [hasProducts && !searchQuery && (_jsx("div", { className: "w-64 flex-shrink-0", children: _jsxs("div", { className: "sticky top-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-4", children: [_jsx(GiSettingsKnobs, { className: "text-xl" }), _jsx("h2", { className: "text-lg font-bold", children: "Filtreler" })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Fiyat Aral\u0131\u011F\u0131" }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "number", value: priceRange.min, onChange: (e) => setPriceRange((prev) => ({
                                                    ...prev, min: e.target.value
                                                })), className: "w-24 px-2 py-1 border rounded", placeholder: "Min" }), _jsx("span", { children: "-" }), _jsx("input", { type: "number", value: priceRange.max, onChange: (e) => setPriceRange((prev) => ({
                                                    ...prev, max: e.target.value
                                                })), className: "w-24 px-2 py-1 border rounded", placeholder: "Max" })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "font-semibold mb-2", children: "Markalar" }), _jsx("div", { className: "space-y-2", children: availableBrands.map((brand) => (_jsxs("label", { className: "flex items-center gap-2", children: [_jsx("input", { type: "checkbox", checked: selectedBrands.includes(brand), onChange: (e) => {
                                                        if (e.target.checked) {
                                                            setSelectedBrands([...selectedBrands, brand]);
                                                        }
                                                        else {
                                                            setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                                                        }
                                                    }, className: "rounded" }), _jsx("span", { children: brand })] }, brand))) })] }), _jsx("button", { onClick: handleApplyFilters, className: "w-full bg-yellow-500 text-white py-2 rounded font-bold hover:bg-yellow-600 transition", children: "Uygula" })] }) })), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("h1", { className: "text-2xl font-bold", children: searchQuery
                                        ? `Arama Sonuçları: "${searchQuery}"`
                                        : subcategory
                                            ? `${categoryId?.replace(/-/g, ' ')} - ${subcategory}`
                                            : categoryId?.replace(/-/g, ' ') }), hasProducts && !searchQuery && (_jsxs("select", { value: sortBy, onChange: (e) => handleSortChange(e.target.value), className: "px-3 py-2 border rounded", children: [_jsx("option", { value: "popular", children: "Pop\u00FClerlik" }), _jsx("option", { value: "price-asc", children: "Fiyat (D\u00FC\u015F\u00FCkten Y\u00FCkse\u011Fe)" }), _jsx("option", { value: "price-desc", children: "Fiyat (Y\u00FCksekten D\u00FC\u015F\u00FC\u011Fe)" })] }))] }), hasProducts ? (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: filteredAndSortedProducts.map((product) => (_jsxs(Link, { to: `/products/${product.id}`, className: "block bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow", children: [_jsx("div", { className: "aspect-w-1 aspect-h-1", children: _jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-48 object-cover" }) }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-semibold text-gray-900 mb-1", children: product.name }), _jsx("p", { className: "text-sm text-gray-500 mb-2", children: product.brand }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "text-lg font-bold text-yellow-600", children: product.price.toLocaleString('tr-TR', {
                                                            style: 'currency',
                                                            currency: 'TRY',
                                                        }) }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx("span", { className: "text-yellow-500", children: "\u2605" }), _jsx("span", { className: "text-sm text-gray-600", children: product.rating })] })] })] })] }, product.id))) })) : (_jsxs("div", { className: "text-center py-12", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-600", children: searchQuery ? 'Aradığınız ürün bulunamadı.' : 'Ürün Bulunamadı' }), _jsx("p", { className: "text-gray-500 mt-2", children: searchQuery
                                        ? 'Lütfen başka bir anahtar kelime ile tekrar deneyin.'
                                        : 'Bu kategoride henüz ürün bulunmamaktadır.' })] }))] })] }) }));
};
export default CategoryPage;
