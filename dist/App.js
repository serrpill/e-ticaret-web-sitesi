import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import CategoryMenu from './components/layout/CategoryMenu';
import Banner from './components/layout/Banner';
import CategoryGrid from './components/layout/CategoryGrid';
import InfoCards from './components/layout/InfoCards';
import Footer from './components/layout/Footer';
import LoginDrawer from './components/layout/LoginDrawer';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useState } from 'react';
import RegisterPage from './components/auth/SignupForm';
import { LoginForm } from './components/auth/LoginForm';
import CartPage from './pages/CartPage';
const queryClient = new QueryClient();
function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsxs(AuthProvider, { children: [_jsx(BrowserRouter, { children: _jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col items-center gap-6", children: [_jsx(Header, { onLoginClick: () => setDrawerOpen(true) }), _jsx(CategoryMenu, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Banner, {}), _jsx(CategoryGrid, {}), _jsx(InfoCards, {})] }) }), _jsx(Route, { path: "/category/:categoryId", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/category/sport/:sportCategory", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/category/:categoryId/:subcategory", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/category/search", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/products/:productId", element: _jsx(ProductDetailPage, {}) }), _jsx(Route, { path: "/register", element: _jsx(RegisterPage, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoginForm, { onClose: handleCloseLoginModal }) }), _jsx(Route, { path: "/cart", element: _jsx(CartPage, {}) })] }), _jsx(Footer, {}), _jsx(LoginDrawer, { open: drawerOpen, onClose: () => setDrawerOpen(false) })] }) }), isLoginModalOpen && _jsx(LoginForm, { onClose: handleCloseLoginModal })] }) }));
}
export default App;
