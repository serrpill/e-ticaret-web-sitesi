import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import CategoryMenu from './components/layout/CategoryMenu';
import Banner from './components/layout/Banner';
import CategoryGrid from './components/layout/CategoryGrid';
import InfoCards from './components/layout/InfoCards';
import Footer from './components/layout/Footer';
import LoginDrawer from './components/layout/LoginDrawer';
import CategoryPage from './pages/CategoryPage';
import { useState } from 'react';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
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
        </Routes>
        <Footer />
        <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </div>
    </Router>
  );
}

export default App; 