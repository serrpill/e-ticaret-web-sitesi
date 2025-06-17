import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { cartApi } from '../api/cart';
const CartPage = () => {
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        loadCart();
    }, []);
    const loadCart = async () => {
        try {
            setLoading(true);
            const response = await cartApi.getCart();
            if (response.success && response.data) {
                setCart(response.data);
            }
            else {
                setError(response.error || 'Sepet yüklenemedi');
            }
        }
        catch (err) {
            setError('Bir hata oluştu');
        }
        finally {
            setLoading(false);
        }
    };
    const handleQuantityChange = async (item, newQuantity) => {
        if (newQuantity < 1)
            return;
        try {
            const response = await cartApi.updateCartItem(item.productId, newQuantity);
            if (response.success && response.data) {
                setCart(response.data);
            }
        }
        catch (err) {
            setError('Miktar güncellenemedi');
        }
    };
    const handleRemoveItem = async (productId) => {
        try {
            const response = await cartApi.removeFromCart(productId);
            if (response.success && response.data) {
                setCart(response.data);
            }
        }
        catch (err) {
            setError('Ürün sepetten çıkarılamadı');
        }
    };
    if (loading) {
        return (_jsx("div", { className: "flex justify-center items-center min-h-screen", children: _jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500" }) }));
    }
    if (error) {
        return (_jsx("div", { className: "max-w-7xl mx-auto px-4 py-8", children: _jsx("div", { className: "text-center text-red-500", children: error }) }));
    }
    if (!cart || cart.items.length === 0) {
        return (_jsx("div", { className: "max-w-7xl mx-auto px-4 py-8", children: _jsxs("div", { className: "text-center", children: [_jsx(GiShoppingCart, { className: "mx-auto text-6xl text-gray-400 mb-4" }), _jsx("h2", { className: "text-2xl font-bold mb-4", children: "Sepetiniz Bo\u015F" }), _jsx("p", { className: "text-gray-600 mb-8", children: "Sepetinizde hen\u00FCz \u00FCr\u00FCn bulunmuyor." }), _jsx(Link, { to: "/", className: "inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition", children: "Al\u0131\u015Fveri\u015Fe Ba\u015Fla" })] }) }));
    }
    return (_jsxs("div", { className: "max-w-7xl mx-auto px-4 py-8", children: [_jsx("h1", { className: "text-2xl font-bold mb-8", children: "Sepetim" }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [_jsx("div", { className: "lg:col-span-2", children: cart.items.map((item) => (_jsxs("div", { className: "flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow", children: [_jsx("img", { src: item.product.imageUrl, alt: item.product.name, className: "w-24 h-24 object-cover rounded" }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-bold", children: item.product.name }), _jsx("p", { className: "text-gray-600", children: item.product.brand }), _jsx("p", { className: "text-yellow-500 font-bold mt-2", children: item.product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: () => handleQuantityChange(item, item.quantity - 1), className: "w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100", children: "-" }), _jsx("span", { className: "w-8 text-center", children: item.quantity }), _jsx("button", { onClick: () => handleQuantityChange(item, item.quantity + 1), className: "w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100", children: "+" })] }), _jsx("button", { onClick: () => handleRemoveItem(item.productId), className: "text-red-500 hover:text-red-700", children: "Kald\u0131r" })] }, item.productId))) }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Sipari\u015F \u00D6zeti" }), _jsxs("div", { className: "space-y-2 mb-4", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Ara Toplam" }), _jsx("span", { children: cart.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Kargo" }), _jsx("span", { children: "\u00DCcretsiz" })] }), _jsx("div", { className: "border-t pt-2 mt-2", children: _jsxs("div", { className: "flex justify-between font-bold", children: [_jsx("span", { children: "Toplam" }), _jsx("span", { children: cart.total.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' }) })] }) })] }), _jsx("button", { className: "w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition", children: "\u00D6demeye Ge\u00E7" })] }) })] })] }));
};
export default CartPage;
