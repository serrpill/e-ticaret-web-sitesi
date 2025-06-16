import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {
  GiCampingTent,
  GiBackpack,
  GiThermometerCold,
  GiWaterBottle,
  GiClothes,
  GiHiking,
  GiCookingPot,
  GiClamp,
  GiFirstAidKit,
  GiKitchenKnives,
  GiCycle,
  GiCanoe,
  GiCompass,
  GiMountainClimbing
} from 'react-icons/gi';
import mockProducts from '../../data/allMockProducts';

interface CategoryMenuItem {
  id: string;
  name: string;
  icon: JSX.Element;
  subcategories: string[];
}

const mainCategories: CategoryMenuItem[] = [
  {
    id: 'outdoor-giyim',
    name: 'Giyim',
    icon: <GiClothes size={18} />,
    subcategories: ['Mont', 'Polar', 'Pantolon']
  },
  {
    id: 'ayakkabi-bot',
    name: 'Ayakkabı',
    icon: <GiHiking size={18} />,
    subcategories: ['Trekking Botu', 'Sandalet', 'Kışlık Botlar', 'Kano Ayakkabısı', 'Pedallı Ayakkabı']
  },
  {
    id: 'uyku',
    name: 'Uyku',
    icon: <GiCampingTent size={18} />,
    subcategories: ['Çadır', 'Uyku Tulumu', 'Mat']
  },
  {
    id: 'yemek',
    name: 'Yemek',
    icon: <GiCookingPot size={18} />,
    subcategories: ['Kamp Ocağı']
  },
  {
    id: 'outdoor-canta',
    name: 'Taşıma',
    icon: <GiBackpack size={18} />,
    subcategories: ['Sırt Çantası', 'Bel Çantası', 'Su geçirmez çanta','Yem Çantası', 'Magnezyum Çantası']
  },
  {
    id: 'aydınlatma',
    name: 'Aydınlatma',
    icon: <GiClamp size={18} />,
    subcategories: ['Kafa Lambası', 'El Feneri', 'Bisiklet Işıkları']
  },
  {
    id: 'güvenlik-alet',
    name: 'Güvenlik & Alet',
    icon: <GiFirstAidKit size={18} />,
    subcategories: ['Kask', 'Emniyet Kemeri', 'İlk Yardım', 'Can Yeleği', 'Eldiven']
  },
  {
    id: 'su',
    name: 'Su',
    icon: <GiWaterBottle size={18} />,
    subcategories: ['Su Filtresi', 'Matara','Termos']
  },
  {
    id: 'spor-ekipmanlari',
    name: 'Spor Ekipmanları',
    icon: <GiCampingTent size={18} />,
    subcategories: ['Bisiklet', 'Kano', 'Kürek','Yem Kutusu','Olta Takımı']
  }
];

const CategoryMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [activeCategory, setActiveCategory] = useState<CategoryMenuItem | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (idx: number, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX
    });
    setOpenIndex(idx);
    setActiveCategory(mainCategories[idx]);
  };

  const handleCategoryClick = (mainCategoryId: string) => {
    navigate(`/category/${mainCategoryId}`);
    setOpenIndex(null);
  };

  const handleSubcategoryClick = (mainCategoryId: string, subcategory: string) => {
    navigate(`/category/${mainCategoryId}?subcategory=${encodeURIComponent(subcategory)}`);
    setOpenIndex(null);
  };

  const getSubcategoriesForMainCategory = (mainCategoryId: string): string[] => {
    // Önce mainCategories array'inden kategoriyi bul
    const category = mainCategories.find(cat => cat.id === mainCategoryId);
    if (category) {
      return category.subcategories;
    }

    // Eğer mainCategories'de bulunamazsa, mockProducts'dan al
    const allProducts = Object.values(mockProducts).flat();
    const filteredProducts = allProducts.filter(p => p.categoryId === mainCategoryId);
    const subcategories = new Set<string>();
    filteredProducts.forEach(p => {
      if (p.subcategory) {
        subcategories.add(p.subcategory);
      }
    });
    return Array.from(subcategories).sort();
  };

  return (
    <>
      <nav className="w-full bg-white py-2 shadow">
        <div className="overflow-x-auto w-full">
          <ul className="flex justify-center px-4 gap-8 py-2 min-w-max whitespace-nowrap">
            {mainCategories.map((cat, idx) => (
              <li
                key={cat.id}
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
            {getSubcategoriesForMainCategory(activeCategory.id).map((sub) => (
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
