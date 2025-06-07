import { useState } from 'react';

const slides = [
  {
    img: 'https://picsum.photos/id/1011/900/220',
    title: "Büyük İndirim! %50'ye varan fırsatlar",
  },
  {
    img: 'https://picsum.photos/id/1015/900/220',
    title: 'Yeni Sezon Ürünleri Stokta',
  },
  {
    img: 'https://picsum.photos/id/1021/900/220',
    title: 'Kampanyalı Ürünlerde Ekstra Sepette İndirim',
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="w-full flex justify-center my-8">
      <div className="relative w-full max-w-5xl mx-auto h-56 rounded overflow-hidden shadow px-4">
        <img
          src={slides[current].img}
          alt={slides[current].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="text-white text-2xl md:text-3xl font-bold drop-shadow text-center">
            {slides[current].title}
          </span>
        </div>
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow">
          &#8592;
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full w-8 h-8 flex items-center justify-center shadow">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Banner;
