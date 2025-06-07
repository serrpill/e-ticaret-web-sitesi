interface HeaderProps {
  onLoginClick?: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => (
  <header className="w-full bg-white shadow">
    <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center font-bold">logo</div>
        <span className="text-lg font-bold">site adı</span>
      </div>
      <div className="flex-1 flex justify-center">
        <input className="w-80 px-4 py-2 border rounded" placeholder="arama çubuğu" />
      </div>
      <div className="flex items-center gap-4">
        <button className="px-3 py-2 bg-gray-200 rounded" onClick={onLoginClick}>üyelik/giriş</button>
        <button className="px-3 py-2 bg-gray-200 rounded">sepet</button>
      </div>
    </div>
  </header>
);

export default Header;
