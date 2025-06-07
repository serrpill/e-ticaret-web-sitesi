import Header from './components/layout/Header';
import CategoryMenu from './components/layout/CategoryMenu';
import Banner from './components/layout/Banner';
import CategoryGrid from './components/layout/CategoryGrid';
import InfoCards from './components/layout/InfoCards';
import Footer from './components/layout/Footer';
import LoginDrawer from './components/layout/LoginDrawer';
import { useState } from 'react';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center gap-6">
      <Header onLoginClick={() => setDrawerOpen(true)} />
      <CategoryMenu />
      <Banner />
      <CategoryGrid />
      <InfoCards />
      <Footer />
      <LoginDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
}

export default App; 