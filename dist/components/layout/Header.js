import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate, createSearchParams } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import { UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
const Header = ({ onLoginClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const handleSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);
        // Update URL query parameter in real-time
        if (newSearchTerm.trim()) {
            navigate({
                pathname: '/category/search',
                search: `?${createSearchParams({ q: newSearchTerm.trim() })}`,
            });
        }
        else {
            // If search term is empty, navigate back to home or a general category view
            navigate('/');
        }
    };
    return (_jsx("header", { className: "w-full bg-white shadow py-6", children: _jsxs("div", { className: "max-w-5xl mx-auto w-full flex items-center justify-between px-4", children: [_jsxs(Link, { to: "/", className: "flex items-center gap-4", children: [_jsx("img", { src: "/blackfeather-ana-logo.png", alt: "Blackfeather Camping Gear Logo", className: "h-20" }), _jsx("span", { className: "text-black font-bold text-2xl", children: "BlackFeather" })] }), _jsx("div", { className: "flex-1 flex justify-center", children: _jsxs("div", { className: "flex items-stretch w-full max-w-sm border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-yellow-500", children: [_jsx("input", { className: "flex-1 px-4 py-2 outline-none", placeholder: "Bir \u015Fey mi aram\u0131\u015Ft\u0131n\u0131z?", value: searchTerm, onChange: handleSearchChange }), _jsx("button", { onClick: () => handleSearchChange({ target: { value: searchTerm } }), className: "px-3 bg-yellow-500 text-white flex items-center justify-center hover:bg-yellow-600 transition", "aria-label": "Search", children: _jsx(FiSearch, { size: 20 }) })] }) }), _jsxs("div", { className: "flex items-center gap-4", children: [user ? (_jsxs(Menu, { as: "div", className: "relative ml-3", children: [_jsx("div", { children: _jsxs(Menu.Button, { className: "flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2", children: [_jsx("span", { className: "sr-only", children: "Kullan\u0131c\u0131 men\u00FCs\u00FCn\u00FC a\u00E7" }), _jsx(UserCircleIcon, { className: "h-8 w-8 rounded-full", "aria-hidden": "true" }), _jsx("span", { className: "ml-2 text-black font-medium text-lg", children: "Hesab\u0131m" }), _jsx(ChevronDownIcon, { className: "ml-1 h-5 w-5 text-gray-400", "aria-hidden": "true" })] }) }), _jsx(Transition, { enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: _jsxs(Menu.Items, { className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: [_jsx(Menu.Item, { children: _jsx("div", { className: "block px-4 py-2 text-sm text-gray-700 font-bold", children: user.name || user.email }) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx(Link, { to: "/my-orders", className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'), children: "T\u00FCm Sipari\u015Flerim" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx(Link, { to: "/profile", className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'), children: "Kullan\u0131c\u0131 Bilgilerim" })) }), _jsx(Menu.Item, { children: ({ active }) => (_jsx("button", { onClick: logout, className: classNames(active ? 'bg-gray-100' : '', 'block w-full text-left px-4 py-2 text-sm text-gray-700'), children: "\u00C7\u0131k\u0131\u015F Yap" })) })] }) })] })) : (_jsx("button", { className: "px-3 py-2 bg-gray-200 rounded", onClick: onLoginClick, children: "\u00FCyelik/giri\u015F" })), _jsx("button", { className: "px-3 py-2 bg-gray-200 rounded", children: "sepet" })] })] }) }));
};
export default Header;
