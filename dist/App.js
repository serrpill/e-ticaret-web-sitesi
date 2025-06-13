import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CategoryMenu from './components/layout/CategoryMenu';
import Banner from './components/layout/Banner';
import CategoryGrid from './components/layout/CategoryGrid';
import InfoCards from './components/layout/InfoCards';
import Footer from './components/layout/Footer';
import LoginDrawer from './components/layout/LoginDrawer';
import CategoryPage from './pages/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import { ProductList } from './components/products/ProductList';
import { useState } from 'react';
function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (_jsx(Router, { children: _jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col items-center gap-6", children: [_jsx(Header, { onLoginClick: () => setDrawerOpen(true) }), _jsx(CategoryMenu, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsxs(_Fragment, { children: [_jsx(Banner, {}), _jsx(CategoryGrid, {}), _jsx(ProductList, {}), _jsx(InfoCards, {})] }) }), _jsx(Route, { path: "/category/:categoryId", element: _jsx(CategoryPage, {}) }), _jsx(Route, { path: "/products/:productId", element: _jsx(ProductDetailPage, {}) })] }), _jsx(Footer, {}), _jsx(LoginDrawer, { open: drawerOpen, onClose: () => setDrawerOpen(false) })] }) }));
}
export default App;
