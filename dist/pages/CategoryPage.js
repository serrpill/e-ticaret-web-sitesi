import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { GiSettingsKnobs } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import mockProducts from '../data/allMockProducts';
const CategoryPage = () => {
    const { categoryId, sportCategory } = useParams(); // categoryId mainCategory veya sportCategory olabilir
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
    // Reset filters when category, subcategory, search query, or sport category changes
    useEffect(() => {
        setPriceRange({ min: '', max: '', });
        setSelectedBrands([]);
        setSortBy('popular');
        setAppliedFilters({
            priceRange: { min: '', max: '', },
            brands: [],
            sortBy: 'popular'
        });
    }, [categoryId, subcategory, searchQuery, sportCategory]);
    const allProducts = Object.values(mockProducts).flat(); // Get all products from all categories
    let productsToDisplay = allProducts;
    if (searchQuery) {
        const lowerCaseQuery = searchQuery.toLowerCase();
        productsToDisplay = allProducts.filter((p) => p.name.toLowerCase().includes(lowerCaseQuery) ||
            p.brand.toLowerCase().includes(lowerCaseQuery) ||
            p.subcategory.toLowerCase().includes(lowerCaseQuery));
    }
    else if (sportCategory) {
        // Spor kategorisine göre filtreleme
        productsToDisplay = allProducts.filter(p => p.sportCategories && p.sportCategories.includes(sportCategory.toLowerCase()));
    }
    else if (categoryId) {
        // Ana kategoriye göre filtreleme
        productsToDisplay = allProducts.filter(p => {
            // categoryId eşleşmesi veya sportCategories içinde categoryId varsa
            return p.categoryId === categoryId ||
                (p.sportCategories && p.sportCategories.includes(categoryId.toLowerCase()));
        });
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
                                        : sportCategory
                                            ? `${sportCategory.charAt(0).toUpperCase() + sportCategory.slice(1)} Ürünleri`
                                            : subcategory
                                                ? `${categoryId?.replace(/-/g, ' ')} - ${subcategory}`
                                                : categoryId
                                                    ? `${categoryId.replace(/-/g, ' ')} Ürünleri`
                                                    : 'Tüm Ürünler' }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("label", { htmlFor: "sort-by", className: "text-gray-700", children: "S\u0131rala:" }), _jsxs("select", { id: "sort-by", value: sortBy, onChange: (e) => handleSortChange(e.target.value), className: "border rounded px-2 py-1", children: [_jsx("option", { value: "popular", children: "Pop\u00FCler" }), _jsx("option", { value: "price-asc", children: "Fiyata G\u00F6re Artan" }), _jsx("option", { value: "price-desc", children: "Fiyata G\u00F6re Azalan" })] })] })] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: hasProducts ? (filteredAndSortedProducts.map((product) => (_jsxs(Link, { to: `/products/${product.id}`, className: "block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-48 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-bold text-lg text-gray-900 truncate", children: product.name }), _jsx("p", { className: "text-gray-600 text-sm", children: product.brand }), _jsxs("div", { className: "flex items-center mt-2", children: [[...Array(5)].map((_, i) => (_jsx("svg", { className: `w-4 h-4 ${i < Math.floor(product.rating)
                                                            ? 'text-yellow-400'
                                                            : 'text-gray-300'}`, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i))), _jsxs("span", { className: "ml-1 text-sm text-gray-600", children: ["(", product.rating.toFixed(1), ")"] })] }), _jsx("p", { className: "text-xl font-bold text-indigo-600 mt-2", children: product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) })] })] }, product.id)))) : (_jsx("p", { className: "text-gray-600 col-span-full", children: "Se\u00E7ilen kategori veya spor i\u00E7in \u00FCr\u00FCn bulunamad\u0131." })) })] })] }) }));
};
export default CategoryPage;
