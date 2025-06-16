const Footer = () => (
  <footer className="w-full bg-gray-200 py-8 mt-8 flex flex-col items-center justify-center text-center gap-2">
    <div className="max-w-5xl mx-auto w-full px-4">
      <div className="text-lg font-bold text-gray-500">İletişim: info@blackFeather.com | 0 555 555 55 55</div>
      <div className="flex gap-4 justify-center mt-2">
        <a href="#" className="text-gray-600 hover:text-blue-600 text-2xl" aria-label="Instagram">📸</a>
        <a href="#" className="text-gray-600 hover:text-blue-400 text-2xl" aria-label="Twitter">🐦</a>
        <a href="#" className="text-gray-600 hover:text-blue-800 text-2xl" aria-label="Facebook">📘</a>
      </div>
      <div className="text-xs text-gray-400 mt-2">© 2024 Site Adı. Tüm hakları saklıdır.</div>
    </div>
  </footer>
);

export default Footer;
