import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  GiCampingTent,
  GiHiking,
  GiBackpack,
  GiKitchenKnives,
  GiMountainClimbing,
  GiThermometerCold,
  GiWaterBottle,
  GiMeditation
} from 'react-icons/gi';

const categories = [
  {
    id: 'kamp-ekipmanlari',
    name: 'Kamp Ekipmanları',
    icon: <GiCampingTent size={18} />,
    subs: ['Çadır', 'Uyku Tulumu', 'Mat', 'Kamp Mutfağı']
  },
  {
    id: 'outdoor-giyim',
    name: 'Outdoor Giyim',
    icon: <GiThermometerCold size={18} />,
    subs: ['Mont', 'Pantolon', 'Polar']
  },
  {
    id: 'ayakkabi-bot',
    name: 'Ayakkabı & Bot',
    icon: <GiHiking size={18} />,
    subs: ['Trekking Botu', 'Sandalet', 'Kışlık Botlar']
  },
  {
    id: 'outdoor-canta',
    name: 'Outdoor Çanta',
    icon: <GiBackpack size={18} />,
    subs: ['Sırt Çantası', 'Bel Çantası']
  },
  {
    id: 'caki-bicak',
    name: 'Çakı & Bıçak',
    icon: <GiKitchenKnives size={18} />,
    subs: ['Çakı', 'Bıçak', 'Alet']
  },
  {
    id: 'dagcilik',
    name: 'Dağcılık',
    icon: <GiMountainClimbing size={18} />,
    subs: ['Kask', 'Emniyet Kemeri']
  },
  {
    id: 'yoga',
    name: 'Yoga',
    icon: <GiMeditation size={18} />,
    subs: ['Mat', 'Blok', 'Kıyafet']
  },
  {
    id: 'termoslar',
    name: 'Termoslar',
    icon: <GiWaterBottle size={18} />,
    subs: ['Stanley', 'Hydro Flask']
  }
];

const CategoryMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [activeCategory, setActiveCategory] = useState<typeof categories[0] | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (idx: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    });
    setOpenIndex(idx);
    setActiveCategory(categories[idx]);
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/category/${categoryId}`);
    setOpenIndex(null);
  };

  const handleSubcategoryClick = (categoryId: string, subcategory: string) => {
    navigate(`/category/${categoryId}?subcategory=${encodeURIComponent(subcategory)}`);
    setOpenIndex(null);
  };

  return (
    <>
      <nav className="w-full bg-white py-2 shadow">
        <div className="overflow-x-auto w-full">
          <ul className="flex px-4 gap-4 py-2 min-w-max whitespace-nowrap">
            {categories.map((cat, idx) => (
              <li
                key={cat.name}
                className="relative"
                onMouseEnter={(e) => handleMouseEnter(idx, e)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 font-bold uppercase text-sm transition ${
                    openIndex === idx ? 'text-yellow-500' : 'text-gray-800'
                  } hover:text-yellow-600`}
                  type="button"
                  onClick={() => handleCategoryClick(cat.id)}
                >
                  {cat.icon}
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {openIndex !== null && activeCategory && createPortal(
        <div
          className="fixed bg-white border border-gray-200 shadow-xl rounded z-[1000]"
          style={{
            top: `${menuPosition.top}px`,
            left: `${menuPosition.left}px`,
            width: '256px'
          }}
          onMouseEnter={() => setOpenIndex(openIndex)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          <ul>
            {activeCategory.subs.map((sub) => (
              <li
                key={sub}
                className="px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-yellow-600 cursor-pointer"
                onClick={() => handleSubcategoryClick(activeCategory.id, sub)}
              >
                {sub}
              </li>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
};

export default CategoryMenu;
