# Bizim Hikayemiz

Sevgilinle birlikte fotoğraflı, kronolojik hikaye sayfası. React ile yazıldı, GitHub Pages’te yayınlanabilir.

## Özellikler

- **Üst bölüm:** Fotoğrafların otomatik döndüğü animasyonlu galeri, yan tarafta küçük fotoğraflar
- **Alt bölüm:** Kronolojik timeline — tarih, başlık, kısa metin ve fotoğraf

## Veriyi düzenleme

Tüm içerik `src/data/timelineData.js` dosyasında:

- **timelineEvents:** Her bir objede `date`, `title`, `description`, `image` var. Sırayı değiştirerek veya yeni obje ekleyerek kronolojiyi güncelle.
- **Kendi fotoğrafların:** Görselleri `public/photos/` klasörüne koy (örn. `tanisma.jpg`). Data’da `image: '/photos/tanisama.jpg'` şeklinde kullan.

Şu an örnek olarak placeholder görseller kullanılıyor; kendi fotoğraflarını ekleyince onlar görünür.

## Çalıştırma

```bash
npm install
npm run dev
```

Tarayıcıda http://localhost:5173 açılır.

## GitHub Pages’e yayınlama

1. Projeyi GitHub’a push et (repo adı örn. `github`).
2. **Settings → Pages → Build and deployment:** Source = **GitHub Actions**.
3. Projede `.github/workflows/deploy.yml` var; push’layınca build alınır ve `gh-pages` branch’ine atılır.
4. Sayfa şu adreste açılır: `https://kullaniciadin.github.io/github/`

Repo adını değiştirirsen `vite.config.js` içindeki `base: '/github/'` değerini yeni repo adına göre güncelle (örn. `'/yeni-repo-adi/'`).
