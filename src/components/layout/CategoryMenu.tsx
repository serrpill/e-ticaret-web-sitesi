import { useState } from 'react';
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
    name: 'Kamp Ekipmanları',
    icon: <GiCampingTent size={18} />,
    subs: ['Çadır', 'Uyku Tulumu', 'Mat', 'Kamp Mutfağı']
  },
  {
    name: 'Outdoor Giyim',
    icon: <GiThermometerCold size={18} />,
    subs: ['Mont', 'Pantolon', 'Polar']
  },
  {
    name: 'Ayakkabı & Bot',
    icon: <GiHiking size={18} />,
    subs: ['Trekking Botu', 'Sandalet', 'Kışlık Botlar']
  },
  {
    name: 'Outdoor Çanta',
    icon: <GiBackpack size={18} />,
    subs: ['Sırt Çantası', 'Bel Çantası']
  },
  {
    name: 'Çakı & Bıçak',
    icon: <GiKitchenKnives size={18} />,
    subs: ['Çakı', 'Bıçak', 'Alet']
  },
  {
    name: 'Dağcılık',
    icon: <GiMountainClimbing size={18} />,
    subs: ['Kask', 'Emniyet Kemeri']
  },
  {
    name: 'Yoga',
    icon: <GiMeditation size={18} />,
    subs: ['Mat', 'Blok', 'Kıyafet']
  },
  {
    name: 'Termoslar',
    icon: <GiWaterBottle size={18} />,
    subs: ['Stanley', 'Hydro Flask']
  }
];

const CategoryMenu = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <nav className="w-full bg-white py-2 shadow">
      <div className="overflow-x-auto w-full">
        <ul className="flex px-4 gap-4 py-2 min-w-max whitespace-nowrap">
          {categories.map((cat, idx) => (
            <li
              key={cat.name}
              className="relative"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                className={`flex items-center gap-2 px-4 py-2 font-bold uppercase text-sm transition ${
                  openIndex === idx ? 'text-yellow-500' : 'text-gray-800'
                } hover:text-yellow-600`}
                type="button"
              >
                {cat.icon}
                {cat.name}
              </button>
              {openIndex === idx && cat.subs?.length > 0 && (
                <ul className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-xl rounded z-[100]">
                  {cat.subs.map((sub) => (
                    <li
                      key={sub}
                      className="px-5 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-yellow-600 cursor-pointer"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryMenu;
