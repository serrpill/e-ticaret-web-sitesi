import { useState } from 'react';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  onLoginClick: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
            />
            <button
              onClick={() => handleSearchChange({ target: { value: searchTerm } } as React.ChangeEvent<HTMLInputElement>)}
              className="px-3 bg-yellow-500 text-white flex items-center justify-center hover:bg-yellow-600 transition"
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                  <span className="sr-only">Kullanıcı menüsünü aç</span>
                  <UserCircleIcon className="h-8 w-8 rounded-full" aria-hidden="true" />
                  <span className="ml-2 text-black font-medium text-lg">Hesabım</span>
                  <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <div className="block px-4 py-2 text-sm text-gray-700 font-bold">
                      {user.name || user.email}
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/my-orders"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Tüm Siparişlerim
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/profile"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                      >
                        Kullanıcı Bilgilerim
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={classNames(active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700')}
                      >
                        Çıkış Yap
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <button className="px-3 py-2 bg-gray-200 rounded" onClick={onLoginClick}>üyelik/giriş</button>
          )}
          <button className="px-3 py-2 bg-gray-200 rounded">sepet</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
