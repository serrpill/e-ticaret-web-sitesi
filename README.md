# BlackFeather Kamp Malzemeleri E-Ticaret Projesi
# GİTHUB LİNKİ : https://github.com/serrpill/e-ticaret-web-sitesi

###HAZIRLAYANLAR:

# ERDEM YORULMAZ - 170422042
# SERPİL ÇOBANLAR - 170422055

Modern ve kullanıcı dostu bir e-ticaret platformu. Kamp malzemeleri satışı yapan, React ve Node.js teknolojileri ile geliştirilmiş tam kapsamlı bir web uygulaması.



## Özellikler

### Kullanıcı Yönetimi
- Kullanıcı kaydı ve girişi
- Profil yönetimi
- Oturum kontrolü
- Güvenli kimlik doğrulama

### Ürün Yönetimi
- Kategorilere göre ürün listeleme
- Detaylı ürün sayfaları
- Gelişmiş ürün arama
- Stok takibi
- Ürün filtreleme ve sıralama

### Sepet İşlemleri
- Sepete ürün ekleme/çıkarma
- Ürün miktarı güncelleme
- Sepet toplamı hesaplama
- Sepet içeriği görüntüleme
- Sepet durumunu saklama

### Sipariş Yönetimi
- Sipariş oluşturma
- Sipariş durumu takibi
- Sipariş detayları

### Arayüz Özellikleri
- Responsive tasarım
- Modern ve kullanıcı dostu arayüz
- Kategori menüsü
- Arama çubuğu
- Banner alanı
- Bilgi kartları
- Footer

### Güvenlik
- JWT token kullanımı
- API route koruması
- Güvenli veri saklama
- Hata yönetimi

## Teknolojiler

### Frontend
- React
- TypeScript
- TailwindCSS
- React Router
- Context API
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/serrpill/e-ticaret-web-sitesi.git
```

2. Frontend bağımlılıklarını yükleyin:
```bash
cd e-ticaret-web-sitesi
npm install
```

3. Backend bağımlılıklarını yükleyin:
```bash
cd server
npm install
```

4. MongoDB'yi başlatın:
```bash
mongod
```

5. Backend sunucusunu başlatın:
```bash
cd server
npm start
```

6. Frontend geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Kullanım

1. Tarayıcınızda `http://localhost:5173` adresine gidin
2. Kayıt olun veya giriş yapın
3. Ürünleri keşfedin ve sepete ekleyin
4. Siparişinizi tamamlayın
5. Alışverişe devam edin

## Proje Yapısı

```
e-ticaret-web-sitesi/
├── src/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── services/
│   └── types/
├── server/
│   ├── models/
│   ├── routes/
│   └── middleware/
└── public/
```

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.
