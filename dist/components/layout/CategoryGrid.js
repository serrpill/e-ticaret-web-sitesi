import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const sportCategories = [
    {
        name: 'Kamp',
        img: 'https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D'
    },
    {
        name: 'Trekking',
        img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Bisiklet',
        img: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        name: 'Kano',
        img: 'https://sporthink.mncdn.com/mnresize/1200/-/sporthink/Blog/2025.04.07/kano-nedir.webp'
    },
    {
        name: 'Dağcılık',
        img: 'https://images.unsplash.com/photo-1508287459906-37445322fdf6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvdWxkZXJpbmd8ZW58MHx8MHx8fDA%3D'
    },
    {
        name: 'Balıkçılık',
        img: 'https://plus.unsplash.com/premium_photo-1661762422433-b18f87b64341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlzaGluZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
];
const CategoryGrid = () => (_jsx("section", { className: "w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-8 px-4", children: sportCategories.map(cat => (_jsxs(Link, { to: `/category/sport/${cat.name.toLowerCase()}`, className: "h-48 rounded overflow-hidden relative group shadow cursor-pointer", children: [_jsx("img", { src: cat.img, alt: cat.name, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }), _jsx("div", { className: "absolute inset-0 bg-black/40 flex items-center justify-center", children: _jsx("span", { className: "text-white text-xl md:text-2xl font-bold drop-shadow text-center", children: cat.name }) })] }, cat.name))) }));
export default CategoryGrid;
