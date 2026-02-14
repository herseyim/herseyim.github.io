/**
 * Kronolojik hikaye verisi
 * Tarihleri, açıklamaları ve fotoğraf yollarını buraya ekle.
 * Fotoğrafları public/photos/ klasörüne koy, yol: "/photos/dosya.jpg"
 */

const placeholder = (text) =>
  `https://placehold.co/800x500/2d1b4e/fff?text=${encodeURIComponent(text)}`

/** Alttaki kronolojik timeline – tarih, başlık, açıklama, fotoğraf */
export const timelineEvents = [
  {
    id: 1,
    date: 'Kasım 2023',
    title: 'Tanışma',
    description: 'İlk kez göz göze geldik. O an her şey değişti.',
    image: '/photos/bakısma.jpeg',
  },
  {
    id: 2,
    date: '',
    title: 'İlk Buluşma',
    description: 'Kahve içtik, saatlerce konuştuk. Zaman nasıl geçti anlamadık.',
    image: '/photos/foto5 (27).jpeg',
  },
  {
    id: 3,
    date: 'Ocak 2024',
    title: 'İlk uzak kalmamız',
    description: 'okul dolayısıyla birbirimizden  ilk kez uzak kaldık.',
    image: '/photos/foto5 (7).jpeg',
  },
  {
    id: 4,
    date: 'mart 2024',
    title: 'ilk çalışma',
    description: 'beraber köle olduk',
    image: '/photos/foto5 (4).jpeg',
  },
  {
    id: 5,
    date: 'nisan 2024',
    title: 'ilk bayramımız',
    description: 'beraber ilk bayramımızı kutladık.',
    image: '/photos/foto5 (15).jpeg',
  },
  {
    id: 6,
    date: 'temmuz 2024',
    title: 'uzun süreli uzaklık',
    description: 'okul dolayısıyla birbirimizden uzak kaldık.',
    image: '/photos/foto5 (23).jpeg',
  },
  {
    id: 7,
    date: 'eylul 2024',
    title: 'tekrar birlikteyiz',
    description: 'Hâlâ birlikteyiz. Seninle her gün yeni bir hikaye.',
    image: '/photos/foto5 (35).jpeg',
  },
  {
    id: 8,
    date: 'kasım 2024',
    title: 'ilk yılımızı',
    description: 'beraber bu aşka imza atığımız günü kutladık',
    image: '/photos/foto5 (33).jpeg',
  },
  {
    id: 9,
    date: ' haziran 2025',
    title: 'mezuniyetim',
    description: 'içimiz buruk çunku uzak kalmaya başlayacağız',
    image: '/photos/foto5 (3).jpeg',
  },
  {
    id: 10,
    date: 'şubat 2026',
    title: 'Bugün',
    description: 'Hâlâ birlikteyiz. Seninle her gün yeni bir hikaye.',
    image:'/photos/foto5 (5).jpeg',
  }
  

]

/**
 * Üstteki animasyon: önce kolaj (hepsinin toplu gösterimi), sonra albümde sırayla.
 * 15–20+ foto ekleyebilirsin. public/photos/ içine koy, yol: "/photos/dosya.jpg"
 */
export const heroPhotos = [
  '/photos/foto5 (1).jpeg',
  '/photos/foto5 (2).jpeg',
  '/photos/foto5 (3).jpeg',
  '/photos/foto5 (4).jpeg',
  '/photos/foto5 (5).jpeg',
  '/photos/foto5 (6).jpeg',
  '/photos/foto5 (7).jpeg',
  '/photos/foto5 (8).jpeg',
  '/photos/foto5 (9).jpeg',
  '/photos/foto5 (10).jpeg',
  '/photos/foto5 (12).jpeg',
  '/photos/foto5 (13).jpeg',
  '/photos/foto5 (14).jpeg',
  '/photos/foto5 (15).jpeg',
  '/photos/foto5 (16).jpeg',
  '/photos/foto5 (17).jpeg',
  '/photos/foto5 (18).jpeg',
  '/photos/foto5 (19).jpeg',
  '/photos/foto5 (20).jpeg',
  '/photos/foto5 (21).jpeg',
  '/photos/foto5 (22).jpeg',
  '/photos/foto5 (23).jpeg',
  '/photos/foto5 (24).jpeg',
  '/photos/foto5 (25).jpeg',
  '/photos/foto5 (26).jpeg',
  '/photos/foto5 (27).jpeg',
  '/photos/foto5 (28).jpeg',
  '/photos/foto5 (29).jpeg',
  '/photos/foto5 (30).jpeg',
  '/photos/foto5 (31).jpeg',
  '/photos/foto5 (32).jpeg',
  '/photos/foto5 (33).jpeg',
  '/photos/foto5 (34).jpeg',
  '/photos/foto5 (35).jpeg'
]

/** Görsel yüklenemezse kullanılacak placeholder */
export const heroPlaceholder = (text) =>
  `https://placehold.co/800x500/2d1b4e/fff?text=${encodeURIComponent(text)}`
