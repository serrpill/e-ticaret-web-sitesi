const categories = [
  {
    name: 'Ayakkabı',
    img: 'https://images.unsplash.com/photo-1517260911205-8a3b66e655a4?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Giyim',
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Kamp Malzemeleri',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Çanta',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Çakı ve Bıçak',
    img: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Teknik Malzemeler',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
  },
];

const CategoryGrid = () => (
  <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-8 px-4">
    {categories.map(cat => (
      <div
        key={cat.name}
        className="h-48 rounded overflow-hidden relative group shadow cursor-pointer"
      >
        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span className="text-white text-xl md:text-2xl font-bold drop-shadow text-center">{cat.name}</span>
        </div>
      </div>
    ))}
  </section>
);

export default CategoryGrid;
