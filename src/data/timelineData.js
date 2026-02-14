/**
 * Kronolojik hikaye verisi
 * Tarihleri, açıklamaları ve fotoğraf yollarını buraya ekle.
 * Kendi fotoğraflarını public/photos/ klasörüne koyup image yolunu "/photos/dosya.jpg" yap.
 * Şu an örnek placeholder görseller kullanılıyor.
 */

const placeholder = (text) =>
  `https://placehold.co/800x500/2d1b4e/fff?text=${encodeURIComponent(text)}`

export const timelineEvents = [
  {
    id: 1,
    date: 'Kasım 2023',
    title: 'Tanışma',
    description: 'İlk kez göz göze geldik. O an her şey değişti.',
    image: '/photos/foto1.jpeg',
  },
  {
    id: 2,
    date: 'Aralık 2023',
    title: 'İlk Buluşma',
    description: 'Kahve içtik, saatlerce konuştuk. Zaman nasıl geçti anlamadık.',
    image: '/photos/foto2.jpeg',
  },
  {
    id: 3,
    date: 'Ocak 2024',
    title: 'İlk Tarih',
    description: 'Resmi ilk randevumuz. Hatıralar biriktirmeye başladık.',
    image: '/photos/foto3.jpeg',
  },
  {
    id: 4,
    date: 'Şubat 2024',
    title: 'Sevgili Olduk',
    description: 'Evet dedik birbirimize. En güzel karar.',
    image: '/photos/foto4.jpeg',
  },
  {
    id: 5,
    date: 'Haziran 2024',
    title: 'Tatil',
    description: 'Birlikte ilk tatilimiz. Deniz, güneş ve sen.',
    image: placeholder('Tatil'),
  },
  {
    id: 6,
    date: 'Şubat 2025',
    title: 'Bugün',
    description: 'Hâlâ birlikteyiz. Seninle her gün yeni bir hikaye.',
    image: placeholder('Bugün'),
  },
]

/**
 * Üstteki animasyonlu bölümde hareket eden fotoğraflar (kronolojiden bağımsız).
 * Kendi fotoğraflarını public/photos/ içine koyup buraya "/photos/dosya.jpg" yaz.
 * Dosya yoksa placeholder görünür; dosyayı ekleyince kendi fotoğrafın görünür.
 */
export const heroPhotos = [
  '/photos/foto1.jpeg',
  '/photos/foto2.jpeg',
  '/photos/foto3.jpeg',
  '/photos/foto4.jpeg',
]

/** Görsel yüklenemezse kullanılacak placeholder (hero için) */
export const heroPlaceholder = (text) =>
  `https://placehold.co/800x500/2d1b4e/fff?text=${encodeURIComponent(text)}`
