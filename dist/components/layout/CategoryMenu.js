import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { GiRunningShoe, GiTShirt, GiPillow, GiCookingPot, GiBackpack, GiFlashlight, GiFirstAidKit, GiWaterBottle, GiMountainClimbing, } from 'react-icons/gi';
import mockProducts from '../../data/allMockProducts';
const mainCategories = [
    {
        id: 'outdoor-giyim',
        name: 'Giyim',
        icon: _jsx(GiTShirt, { size: 18 }),
        subcategories: ['Mont', 'Polar', 'Pantolon']
    },
    {
        id: 'ayakkabi-bot',
        name: 'Ayakkabı',
        icon: _jsx(GiRunningShoe, { size: 18 }),
        subcategories: ['Trekking Botu', 'Sandalet', 'Kışlık Botlar', 'Kano Ayakkabısı', 'Pedallı Ayakkabı']
    },
    {
        id: 'uyku',
        name: 'Uyku',
        icon: _jsx(GiPillow, { size: 18 }),
        subcategories: ['Çadır', 'Uyku Tulumu', 'Mat']
    },
    {
        id: 'yemek',
        name: 'Yemek',
        icon: _jsx(GiCookingPot, { size: 18 }),
        subcategories: ['Kamp Ocağı']
    },
    {
        id: 'outdoor-canta',
        name: 'Taşıma',
        icon: _jsx(GiBackpack, { size: 18 }),
        subcategories: ['Sırt Çantası', 'Bel Çantası', 'Su geçirmez çanta', 'Yem Çantası', 'Magnezyum Çantası']
    },
    {
        id: 'aydınlatma',
        name: 'Aydınlatma',
        icon: _jsx(GiFlashlight, { size: 18 }),
        subcategories: ['Kafa Lambası', 'El Feneri', 'Bisiklet Işıkları']
    },
    {
        id: 'güvenlik-alet',
        name: 'Güvenlik & Alet',
        icon: _jsx(GiFirstAidKit, { size: 18 }),
        subcategories: ['Kask', 'Emniyet Kemeri', 'İlk Yardım', 'Can Yeleği', 'Eldiven']
    },
    {
        id: 'su',
        name: 'Su',
        icon: _jsx(GiWaterBottle, { size: 18 }),
        subcategories: ['Su Filtresi', 'Matara', 'Termos']
    },
    {
        id: 'spor-ekipmanlari',
        name: 'Spor Ekipmanları',
        icon: _jsx(GiMountainClimbing, { size: 18 }),
        subcategories: ['Bisiklet', 'Kano', 'Kürek', 'Yem Kutusu', 'Olta Takımı']
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
        setActiveCategory(mainCategories[idx]);
    };
    const handleCategoryClick = (mainCategoryId) => {
        navigate(`/category/${mainCategoryId}`);
        setOpenIndex(null);
    };
    const handleSubcategoryClick = (mainCategoryId, subcategory) => {
        navigate(`/category/${mainCategoryId}?subcategory=${encodeURIComponent(subcategory)}`);
        setOpenIndex(null);
    };
    const getSubcategoriesForMainCategory = (mainCategoryId) => {
        // Önce mainCategories array'inden kategoriyi bul
        const category = mainCategories.find(cat => cat.id === mainCategoryId);
        if (category) {
            return category.subcategories;
        }
        // Eğer mainCategories'de bulunamazsa, mockProducts'dan al
        const allProducts = Object.values(mockProducts).flat();
        const filteredProducts = allProducts.filter(p => p.categoryId === mainCategoryId);
        const subcategories = new Set();
        filteredProducts.forEach(p => {
            if (p.subcategory) {
                subcategories.add(p.subcategory);
            }
        });
        return Array.from(subcategories).sort();
    };
    return (_jsxs(_Fragment, { children: [_jsx("nav", { className: "w-full bg-white py-2 shadow", children: _jsx("div", { className: "overflow-x-auto w-full", children: _jsx("ul", { className: "flex justify-center px-4 gap-8 py-2 min-w-max whitespace-nowrap", children: mainCategories.map((cat, idx) => (_jsx("li", { className: "relative", onMouseEnter: (e) => handleMouseEnter(idx, e), onMouseLeave: () => setOpenIndex(null), children: _jsxs("button", { className: `flex items-center gap-2 px-4 py-2 font-bold uppercase text-sm transition ${openIndex === idx ? 'text-yellow-500' : 'text-gray-800'} hover:text-yellow-600`, type: "button", onClick: () => handleCategoryClick(cat.id), children: [cat.icon, cat.name] }) }, cat.id))) }) }) }), openIndex !== null && activeCategory && createPortal(_jsx("div", { className: "fixed bg-white border border-gray-200 shadow-xl rounded z-[1000]", style: {
                    top: `${menuPosition.top}px`,
                    left: `${menuPosition.left}px`,
                    width: '256px'
                }, onMouseEnter: () => setOpenIndex(openIndex), onMouseLeave: () => setOpenIndex(null), children: _jsx("ul", { children: getSubcategoriesForMainCategory(activeCategory.id).map((sub) => (_jsx("li", { className: "px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-yellow-600 cursor-pointer", onClick: () => handleSubcategoryClick(activeCategory.id, sub), children: sub }, sub))) }) }), document.body)] }));
};
export default CategoryMenu;
