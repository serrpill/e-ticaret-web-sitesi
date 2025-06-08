import { useState } from 'react';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    // Update URL query parameter in real-time
    if (newSearchTerm.trim()) {
      navigate({
        pathname: '/category/search',
        search: `?${createSearchParams({ q: newSearchTerm.trim() })}`,
      });
    } else {
      // If search term is empty, navigate back to home or a general category view
      navigate('/'); 
    }
  };

  return (
    <header className="w-full bg-white shadow py-6">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-4">
          <img src="/blackfeather-ana-logo.png" alt="Blackfeather Camping Gear Logo" className="h-20" />
          <span className="text-black font-bold text-2xl">BlackFeather</span>
        </Link>
        <div className="flex-1 flex justify-center">
          <div className="flex items-stretch w-full max-w-sm border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-yellow-500">
            <input
              className="flex-1 px-4 py-2 outline-none"
              placeholder="Bir şey mi aramıştınız?"
              value={searchTerm}
              onChange={handleSearchChange}
              // Removed onKeyPress as search is now live
            />
            <button
              onClick={() => handleSearchChange({ target: { value: searchTerm } } as React.ChangeEvent<HTMLInputElement>)} // Trigger search on click if not empty
              className="px-3 bg-yellow-500 text-white flex items-center justify-center hover:bg-yellow-600 transition"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-3 py-2 bg-gray-200 rounded" onClick={onLoginClick}>üyelik/giriş</button>
          <button className="px-3 py-2 bg-gray-200 rounded">sepet</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
