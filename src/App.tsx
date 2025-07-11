import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
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
import OrderSuccessPage from './pages/OrderSuccessPage';
import OrdersPage from './pages/OrdersPage';

const queryClient = new QueryClient();

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <BrowserRouter>
              <div className="min-h-screen bg-gray-50 flex flex-col items-center gap-6">
                <Header onLoginClick={() => setDrawerOpen(true)} />
                <CategoryMenu />
                <Routes>
                  <Route path="/" element={
                    <>
                      <Banner />
                      <CategoryGrid />
                      <InfoCards />
                    </>
                  } />
                  <Route path="/category/:categoryId" element={<CategoryPage />} />
                  <Route path="/category/sport/:sportCategory" element={<CategoryPage />} />
                  <Route path="/category/:categoryId/:subcategory" element={<CategoryPage />} />
                  <Route path="/category/search" element={<CategoryPage />} />
                  <Route path="/products/:productId" element={<ProductDetailPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginForm onClose={handleCloseLoginModal} />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/order-success" element={<OrderSuccessPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                </Routes>
                <Footer />
                <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
              </div>
            </BrowserRouter>
          </OrderProvider>
        </CartProvider>
        {isLoginModalOpen && <LoginForm onClose={handleCloseLoginModal} />}
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App; 