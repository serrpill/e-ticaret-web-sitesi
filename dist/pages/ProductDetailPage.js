import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import { GiShoppingCart } from 'react-icons/gi';
import mockProducts from '../data/allMockProducts';
import { cartApi } from '../api/cart';
const ProductDetailPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [addingToCart, setAddingToCart] = useState(false);
    useEffect(() => {
        const allProducts = Object.values(mockProducts).flat();
        const foundProduct = allProducts.find(p => p.id === productId);
        if (foundProduct) {
            setProduct(foundProduct);
        }
        else {
            console.log('Product not found. ID from URL:', productId);
            console.log('All products:', allProducts);
            setError('Ürün bulunamadı');
        }
        setLoading(false);
    }, [productId]);
    const handleAddToCart = async () => {
        if (!product)
            return;
        try {
            setAddingToCart(true);
            const response = await cartApi.addToCart(product, quantity);
            if (response.success) {
                navigate('/cart');
            }
            else {
                setError(response.error || 'Ürün sepete eklenemedi');
            }
        }
        catch (err) {
            setError('Bir hata oluştu');
        }
        finally {
            setAddingToCart(false);
        }
    };
    if (loading) {
        return (_jsx("div", { className: "flex justify-center items-center min-h-screen", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500" }) }));
    }
    if (error || !product) {
        return (_jsx("div", { className: "max-w-7xl mx-auto px-4 py-8", children: _jsx("div", { className: "text-center text-red-500", children: error || 'Ürün bulunamadı' }) }));
    }
    return (_jsx("div", { className: "max-w-7xl mx-auto px-4 py-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "relative", children: [_jsx("img", { src: product.imageUrl, alt: product.name, className: "w-full h-[500px] object-cover rounded-lg" }), _jsxs("div", { className: "absolute top-4 right-4 flex gap-2", children: [_jsx("button", { className: "p-2 bg-white rounded-full shadow-md hover:bg-gray-100", children: _jsx(HeartIcon, { className: "w-6 h-6 text-gray-600" }) }), _jsx("button", { className: "p-2 bg-white rounded-full shadow-md hover:bg-gray-100", children: _jsx(BookmarkIcon, { className: "w-6 h-6 text-gray-600" }) })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: product.name }), _jsx("p", { className: "text-lg text-gray-600 mt-2", children: product.brand })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "flex items-center", children: [...Array(5)].map((_, i) => (_jsx("svg", { className: `w-5 h-5 ${i < Math.floor(product.rating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'}`, fill: "currentColor", viewBox: "0 0 20 20", children: _jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i))) }), _jsxs("span", { className: "text-gray-600", children: ["(", product.rating, ")"] })] }), _jsx("div", { className: "text-3xl font-bold text-gray-900", children: product.price.toLocaleString('tr-TR', {
                                style: 'currency',
                                currency: 'TRY'
                            }) }), _jsx("p", { className: "text-gray-600", children: product.description }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-semibold", children: "Stok Durumu:" }), _jsx("span", { className: product.stock > 0 ? 'text-green-600' : 'text-red-600', children: product.stock > 0 ? `${product.stock} adet` : 'Stokta yok' })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-semibold", children: "Kategori:" }), _jsx("span", { className: "text-gray-600", children: product.subcategory })] })] }), _jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsxs("div", { className: "flex items-center border rounded", children: [_jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "w-10 h-10 flex items-center justify-center hover:bg-gray-100", children: "-" }), _jsx("span", { className: "w-12 text-center", children: quantity }), _jsx("button", { onClick: () => setQuantity(quantity + 1), className: "w-10 h-10 flex items-center justify-center hover:bg-gray-100", children: "+" })] }), _jsxs("button", { onClick: handleAddToCart, disabled: addingToCart, className: "flex-1 bg-yellow-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-yellow-600 transition flex items-center justify-center gap-2 disabled:opacity-50", children: [_jsx(GiShoppingCart, { className: "text-xl" }), addingToCart ? 'Ekleniyor...' : 'Sepete Ekle'] })] }), _jsxs("div", { className: "border-t pt-6", children: [_jsx("h3", { className: "font-bold mb-2", children: "\u00DCr\u00FCn Detaylar\u0131" }), _jsxs("ul", { className: "space-y-2 text-gray-600", children: [_jsxs("li", { children: ["Kategori: ", product.categoryId] }), _jsxs("li", { children: ["Alt Kategori: ", product.subcategory] }), _jsxs("li", { children: ["Stok Durumu: ", product.stock > 0 ? 'Stokta Var' : 'Stokta Yok'] })] })] })] })] }) }));
};
export default ProductDetailPage;
