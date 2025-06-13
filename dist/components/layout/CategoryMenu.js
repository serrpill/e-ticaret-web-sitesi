import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { GiCampingTent, GiHiking, GiBackpack, GiKitchenKnives, GiMountainClimbing, GiThermometerCold, GiWaterBottle, GiMeditation } from 'react-icons/gi';
const categories = [
    {
        id: 'kamp-ekipmanlari',
        name: 'Kamp Ekipmanları',
        icon: _jsx(GiCampingTent, { size: 18 }),
        subs: ['Çadır', 'Uyku Tulumu', 'Mat', 'Kamp Mutfağı']
    },
    {
        id: 'outdoor-giyim',
        name: 'Outdoor Giyim',
        icon: _jsx(GiThermometerCold, { size: 18 }),
        subs: ['Mont', 'Pantolon', 'Polar']
    },
    {
        id: 'ayakkabi-bot',
        name: 'Ayakkabı & Bot',
        icon: _jsx(GiHiking, { size: 18 }),
        subs: ['Trekking Botu', 'Sandalet', 'Kışlık Botlar']
    },
    {
        id: 'outdoor-canta',
        name: 'Outdoor Çanta',
        icon: _jsx(GiBackpack, { size: 18 }),
        subs: ['Sırt Çantası', 'Bel Çantası']
    },
    {
        id: 'caki-bicak',
        name: 'Çakı & Bıçak',
        icon: _jsx(GiKitchenKnives, { size: 18 }),
        subs: ['Çakı', 'Bıçak', 'Alet']
    },
    {
        id: 'dagcilik',
        name: 'Dağcılık',
        icon: _jsx(GiMountainClimbing, { size: 18 }),
        subs: ['Kask', 'Emniyet Kemeri']
    },
    {
        id: 'yoga',
        name: 'Yoga',
        icon: _jsx(GiMeditation, { size: 18 }),
        subs: ['Mat', 'Blok', 'Kıyafet']
    },
    {
        id: 'termoslar',
        name: 'Termoslar',
        icon: _jsx(GiWaterBottle, { size: 18 }),
        subs: ['Stanley', 'Hydro Flask']
    }
];
const CategoryMenu = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const [activeCategory, setActiveCategory] = useState(null);
    const navigate = useNavigate();
    const handleMouseEnter = (idx, event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setMenuPosition({
            top: rect.bottom + window.scrollY,
            left: rect.left + window.scrollX
        });
        setOpenIndex(idx);
        setActiveCategory(categories[idx]);
    };
    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
        setOpenIndex(null);
    };
    const handleSubcategoryClick = (categoryId, subcategory) => {
        navigate(`/category/${categoryId}?subcategory=${encodeURIComponent(subcategory)}`);
        setOpenIndex(null);
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: "w-full bg-white py-2 shadow", children: _jsx("div", { className: "overflow-x-auto w-full", children: _jsx("ul", { className: "flex px-4 gap-4 py-2 min-w-max whitespace-nowrap", children: categories.map((cat, idx) => (_jsx("li", { className: "relative", onMouseEnter: (e) => handleMouseEnter(idx, e), onMouseLeave: () => setOpenIndex(null), children: _jsxs("button", { className: `flex items-center gap-2 px-4 py-2 font-bold uppercase text-sm transition ${openIndex === idx ? 'text-yellow-500' : 'text-gray-800'} hover:text-yellow-600`, type: "button", onClick: () => handleCategoryClick(cat.id), children: [cat.icon, cat.name] }) }, cat.name))) }) }) }), openIndex !== null && activeCategory && createPortal(_jsx("div", { className: "fixed bg-white border border-gray-200 shadow-xl rounded z-[1000]", style: {
                    top: `${menuPosition.top}px`,
                    left: `${menuPosition.left}px`,
                    width: '256px'
                }, onMouseEnter: () => setOpenIndex(openIndex), onMouseLeave: () => setOpenIndex(null), children: _jsx("ul", { children: activeCategory.subs.map((sub) => (_jsx("li", { className: "px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-yellow-600 cursor-pointer", onClick: () => handleSubcategoryClick(activeCategory.id, sub), children: sub }, sub))) }) }), document.body)] }));
};
export default CategoryMenu;
