import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const infos = [
    {
        icon: '🚚',
        title: 'Hızlı & Ücretsiz Kargo',
        desc: '500 TL & Üzeri Alışverişlerinizde Ücretsiz Aynı Gün Kargo.'
    },
    {
        icon: '🔄',
        title: 'İade & Değişim',
        desc: 'Satın Aldığınız Ürünleri 14 Gün İçerisinde Ücretsiz Olarak Değişim/İade Yapabilirsiniz.'
    },
    {
        icon: '🔒',
        title: 'Güvenli Alışveriş',
        desc: '256Bit SSL Sertifikası & 3D Secure ile Bilgileriniz Korunmaktadır.'
    },
    {
        icon: '✅',
        title: '% 100 Orijinal Ürün Garantisi',
        desc: 'Tüm Ürünlerimiz %100 Orijinal Olup Faturası ile Birlikte Gelmektedir.'
    }
];
const InfoCards = () => (_jsx("section", { className: "w-full max-w-5xl mx-auto flex flex-wrap md:flex-nowrap justify-center gap-6 my-8 px-4", children: infos.map(info => (_jsxs("div", { className: "flex-1 min-w-[200px] max-w-xs bg-white rounded shadow p-4 flex flex-col items-center text-center", children: [_jsx("div", { className: "mb-2 text-3xl", children: info.icon }), _jsx("div", { className: "font-bold mb-1", children: info.title }), _jsx("div", { className: "text-xs text-gray-600", children: info.desc })] }, info.title))) }));
export default InfoCards;
